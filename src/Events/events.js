const eventsConstructor = () => {

    let eventName;
    let event;

    return {
        listen: (name, fn) => { eventName = name; event = fn },
        emit: (name) => { if (name === eventName) event() }
    }
}

const events = eventsConstructor();

export default events;

export { eventsConstructor };