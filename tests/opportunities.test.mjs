import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import {
  opportunities,
  sectors,
  views,
  filterOpportunities,
  getOpportunity,
  fundTotals,
  money,
  documentsFor,
  recordPayload,
  sha256,
} from '../lib/opportunities.ts';
import { recordHashes } from '../lib/record-hashes.ts';

test('sector filtering only returns matching opportunities, with all sectors available', () => {
  assert.equal(filterOpportunities('All sectors').length, 3);
  for (const sector of sectors.slice(1)) {
    const result = filterOpportunities(sector);
    assert.equal(result.length, 1);
    assert.ok(result.every((o) => o.sector === sector));
  }
  assert.deepEqual(filterOpportunities('invalid'), []);
  assert.equal(getOpportunity('missing'), undefined);
  assert.equal(
    new Set(opportunities.map((o) => o.id)).size,
    opportunities.length,
  );
});
for (const o of opportunities) {
  test(`${o.name}: budget reconciles, spending stays within allocation`, () => {
    assert.equal(
      o.allocation.reduce((sum, row) => sum + row.planned, 0),
      o.budget,
    );
    for (const row of o.allocation) {
      assert.ok(row.used >= 0);
      assert.ok(row.used <= row.planned);
    }
    const totals = fundTotals(o);
    assert.equal(totals.used + totals.remaining, o.budget);
    assert.ok(totals.percent >= 0 && totals.percent <= 100);
  });
  test(`${o.name}: evidence and timeline disclose the open risk and consistent totals`, () => {
    const docs = documentsFor(o);
    assert.equal(docs.length, 4);
    assert.ok(
      docs.every(
        (d) =>
          d.body.length > 0 &&
          d.body.join(' ').includes('ILLUSTRATIVE DOCUMENT'),
      ),
    );
    assert.ok(docs.find((d) => d.id === 'risk').body.includes(o.riskDetail));
    assert.ok(o.milestones[1].description.includes(money(fundTotals(o).used)));
    assert.ok(
      o.milestones.every(
        (m, i) => i === 0 || m.date <= o.milestones[i - 1].date,
      ),
    );
    assert.equal(
      o.milestones.filter((m) => m.status === 'Open item').length,
      1,
    );
  });
  test(`${o.name}: reference hash matches snapshot and detects tampering`, async () => {
    const payload = recordPayload(o);
    assert.match(recordHashes[o.id], /^[a-f0-9]{64}$/);
    assert.equal(await sha256(payload), recordHashes[o.id]);
    assert.equal(
      createHash('sha256').update(payload).digest('hex'),
      recordHashes[o.id],
    );
    assert.notEqual(await sha256(payload + ' '), recordHashes[o.id]);
    assert.notEqual(
      await sha256(recordPayload({ ...o, budget: o.budget + 1 })),
      recordHashes[o.id],
    );
  });
}
test('money renders Nigerian naira with full amounts, millions, and billions', () => {
  assert.equal(money(0), '₦0');
  assert.equal(money(100000), '₦100,000');
  assert.equal(money(120000000), '₦120.00 M');
  assert.equal(money(1000000000), '₦1.00 B');
});
test('all evidence destinations are declared', () =>
  assert.deepEqual(
    views.map((v) => v.id),
    ['overview', 'trust', 'funds', 'updates', 'integrity'],
  ));
