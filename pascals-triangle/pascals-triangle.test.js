test('Should generate the Pascal Triangle', () => {
    const { PascalsTriangle } = require('./pascals-triangle');

    const output1 = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
    const outputExpected1 = PascalsTriangle.generate(5);

    const output2 = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]];
    const outputExpected2 = PascalsTriangle.generate(6);

    expect(outputExpected1.join()).toEqual(output1.join());
    expect(outputExpected2.join()).toEqual(output2.join());
});