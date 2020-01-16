import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

test('Testing rock v rock draw', function(assert) {
    const player = 'rock';
    const computer = 'rock';
    const expectedOutcome = 'draw';
    const shouldBeDrawResult = checkResult(player, computer);
    assert.equal(shouldBeDrawResult, expectedOutcome);
});

test('Testing rock v paper lose', function(assert) {
    const player = 'rock';
    const computer = 'paper';
    const expectedOutcome = 'lose';
    const shouldBeDrawResult = checkResult(player, computer);
    assert.equal(shouldBeDrawResult, expectedOutcome);
});

test('Testing rock v scissors win', function(assert) {
    const player = 'rock';
    const computer = 'scissors';
    const expectedOutcome = 'win';
    const shouldBeDrawResult = checkResult(player, computer);
    assert.equal(shouldBeDrawResult, expectedOutcome);
});