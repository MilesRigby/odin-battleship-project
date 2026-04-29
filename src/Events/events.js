const eventsConstructor = () => {

    let events = {};

    return {
        listen: (name, fn) => { events[name] = fn },
        emit: (name) => { fn = events[name]; if (fn) fn(); }
    }
}

const events = eventsConstructor();

export default events;

export { eventsConstructor };