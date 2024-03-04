/**
 * Monday, Mar 4th 2024
 * Daily Algorithm Challenge
 * 
 * Challenge name: Pascal’s Triangle
 * Description: Given numRows, generate the first numRows of Pascal’s triangle. For example, given numRows = 5, the result should be:
 */

class PascalsTriangle {

    static generate(numRows) {

        const triangleRows = [
            [1],
        ];

        for (let i = 1; i < numRows; i++) {
            const newRow = [1];
            for (let j = 0; j < triangleRows[i - 1].length; j++) {
                if (j !== triangleRows[i - 1].length - 1) {
                    newRow.push(triangleRows[i - 1][j] + triangleRows[i - 1][j + 1]);
                }
            }
            newRow.push(1);
            triangleRows.push(newRow);
        }

        return triangleRows;

    }

}

module.exports = { PascalsTriangle };
