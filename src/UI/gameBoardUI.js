const GameBoardUI = () => {

    const BOARD_SIZE = 10;

    return new Array(100).fill(
        {"div": {attributes: { "className": "board-cell", "data-state": "none" }, children: []}}
    )

}

export default GameBoardUI;