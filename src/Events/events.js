const eventsConstructor = () => {
    return {
        listen: (event, fn) => { fn() },
        emit: () => {}
    }
}

const events = eventsConstructor();

export default events;

export { eventsConstructor };