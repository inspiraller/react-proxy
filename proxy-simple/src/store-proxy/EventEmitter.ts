import Events from "events";

const EventEmitter = new Events();
EventEmitter.setMaxListeners(Number.MAX_SAFE_INTEGER);

export default EventEmitter;
