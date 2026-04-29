const eventsConstructor = () => {

    const events = {};

    const listen = (name, fn) => { 
        if ( !events[name] ) events[name] = [];
        events[name].push(fn);
    }

    const emit = (name, data) => { 
        fnArr = events[name];

        if (fnArr) {
            for (fn of fnArr) {
                fn(data);
            }
        }
    }

    return {
        listen: listen,
        emit: emit        
    }
}

const events = eventsConstructor();

// single instance exported for use in project
export default events;

// constructor exported for testing with Jest
export { eventsConstructor };