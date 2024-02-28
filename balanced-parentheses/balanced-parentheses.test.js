test('Balanced parentheses cases', () => {
    const { BalancedParentheses } = require('./balanced-parentheses');

    expect(BalancedParentheses.isValid('()')).toBeTruthy();
    expect(BalancedParentheses.isValid('(hello, world)')).toBeTruthy();
    expect(BalancedParentheses.isValid('Random text (as this) is ok().')).toBeTruthy();
    expect(BalancedParentheses.isValid(')(')).toBeFalsy();
    expect(BalancedParentheses.isValid('(Hello (,) world (!))')).toBeTruthy();
    expect(BalancedParentheses.isValid(')()(')).toBeFalsy();
    expect(BalancedParentheses.isValid('())(()')).toBeFalsy();
});