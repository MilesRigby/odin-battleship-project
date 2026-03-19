const Ship = (size) => {

    let hits = 0;

    const hit = () => { hits++; }

    const isSunk = () => { return hits === size; }

    return {
        hit,
        isSunk    
    }

}

export default Ship;