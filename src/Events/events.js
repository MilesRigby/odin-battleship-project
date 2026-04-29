const eventsConstructor = () => {

    // Initialise events with an empty object
    const events = {};

    // Adds the event name as a key in the above object if it doesn't already exist; 
    // adds the listener's callback to the array that key has as its value
    const listen = (name, fn) => { 
        if ( !events[name] ) events[name] = [];
        events[name].push(fn);
    }

    // Calls every callback registered to the event [name];
    // passes a data object as the lone parameter to every callback
    const emit = (name, data) => { 
        fnArr = events[name];

        if (fnArr) {
            for (fn of fnArr) {
                fn(data);
            }
        }
    }

    // only listening and emitting actions are accessible externally, not the events object
    return {
        listen: listen,
        emit: emit        
    }
}

// single instance exported for use in project
const events = eventsConstructor();
export default events;

// constructor exported for testing with Jest
export { eventsConstructor };