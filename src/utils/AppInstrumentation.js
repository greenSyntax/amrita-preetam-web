import {instrument} from '../utils/firebase';

export const instrumentEvent = (event_name, payload) => {
    instrument(event_name, payload);
}
