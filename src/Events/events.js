const eventsConstructor = () => {

    let event;

    return {
        listen: (name, fn) => { event = fn },
        emit: () => { event() }
    }
}

const events = eventsConstructor();

export default events;

export { eventsConstructor };