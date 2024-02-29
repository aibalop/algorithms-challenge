test('Tic tac toe cases', () => {
    const { TicTacToeGame } = require('./tic-tac-toe-winner');

    expect(TicTacToeGame.winner([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]])).toEqual('A');
    expect(TicTacToeGame.winner([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]])).toEqual('B');
    expect(TicTacToeGame.winner([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]])).toEqual('Draw');
    expect(TicTacToeGame.winner([[0, 0], [1, 1], [2, 0], [1, 0]])).toEqual('Pending');
});