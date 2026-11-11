import test from 'node:test';
import assert from 'node:assert/strict';
import { en } from '../translations/en';
import { hi } from '../translations/hi';

test('English and Hindi dictionaries have matching top-level keys', () => {
  const enKeys = Object.keys(en).sort();
  const hiKeys = Object.keys(hi).sort();
  assert.deepEqual(enKeys, hiKeys);
});

test('FAQ counts match between English and Hindi', () => {
  assert.equal(en.faq.items.length, 12);
  assert.equal(hi.faq.items.length, 12);
  assert.equal(en.faq.items.length, hi.faq.items.length);
});

test('Benefits count matches between English and Hindi', () => {
  assert.equal(en.benefits.items.length, 6);
  assert.equal(hi.benefits.items.length, 6);
});

test('HowItWorks steps match between English and Hindi', () => {
  assert.equal(en.howItWorks.steps.length, 4);
  assert.equal(hi.howItWorks.steps.length, 4);
});

test('WhoIsItFor categories match between English and Hindi', () => {
  assert.equal(en.whoIsItFor.cards.length, 6);
  assert.equal(hi.whoIsItFor.cards.length, 6);
});
