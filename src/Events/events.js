const eventsConstructor = () => {
    return {
        listen: () => {}
    }
}

const events = eventsConstructor();

export default events;

export { eventsConstructor };