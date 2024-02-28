/**
 * Wednesday 28th Feb, 2024
 * Daily Algorithm Challenge
 * 
 * Challenge name: balanced-parentheses
 * 
 * Description: 
 * Given a string that may contain parentheses validate if it has all being and ending parentheses
 * Examples:
 * 
 *  input : ()
 *  output: valid
 *  
 *  input : (hello, world)
 *  output: valid
 * 
 *  input : Random text (as this) is ok().
 *  output: valid
 * 
 *  input : )(
 *  output: invalid
 * 
 *  input : (Hello (,) world (!))
 *  output: valid
 * 
 *  input : )()(
 *  output: invalid
 * 
 *  input : ())(()
 *  output: invalid
 */

class BalancedParentheses {

    static isValid(input) {
        const parentheses = input.replace(' ', '').split('').filter(char => char === '(' || char === ')');
        console.log(`Input: ${input}`);

        if (parentheses.length === 0 || parentheses.length % 2 !== 0) {
            console.log(`Output: invalid`);
            return false;
        }

        const stackOpening = [];

        for (const iterator of parentheses) {
            if (iterator == '(') {
                stackOpening.push(iterator);
            } else if (stackOpening.length === 0 || stackOpening.pop() !== '(') {
                console.log(`Output: invalid`);
                return false;
            }
        }

        console.log(`Output: valid`);
        return true;
    }

}

module.exports = { BalancedParentheses };