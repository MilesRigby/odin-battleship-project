const eventsConstructor = () => {
    return {
        listen: () => {},
        emit: () => {}
    }
}

const events = eventsConstructor();

export default events;

export { eventsConstructor };