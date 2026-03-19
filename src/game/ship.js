const Ship = () => {

    let sunk = false;

    const hit = () => { sunk = true; }

    const isSunk = () => { return sunk; }

    return {
        hit,
        isSunk    
    }

}

export default Ship;