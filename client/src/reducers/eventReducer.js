import {
  GET_EVENTS,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  EVENTS_LOADING
} from '../actions/types';

const initialState = {
  events: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event._id !== action.payload),
        status: action.status,
        msg: action.msg
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
        status: action.status,
        msg: action.msg
      };
    case EDIT_EVENT:
      const newEvents = state.events.map(event => {
        if (event._id === action.payload._id) {
          return Object.assign(event, action.payload)
        }
        return event
      })
      return {
        ...state,
        events: newEvents,
        status: action.status,
        msg: action.msg
      };
    case EVENTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
