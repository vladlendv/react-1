import deepCopy from "../deepCopy";
const SEND_MESSAGE = "SEND-MESSAGE";
const SET_ACTIVE_DIALOG = "SET-ACTIVE-DIALOG";
const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";

let initialState = {
  activeDialog: {
    id: 1,
  },
  usersData: [
    {
      id: 1,
      name: "Katya",
      profileImg:
        "https://android-obzor.com/wp-content/uploads/2022/02/4-1.jpg",
      messages: [
        { text: "Where am I?", type: "inner", id: "1" },
        { text: "I dont know", type: "inner", id: "2" },
      ],
    },
    {
      id: 2,
      name: "Roman",
      profileImg:
        "https://android-obzor.com/wp-content/uploads/2022/02/6-1.jpg",
      messages: [
        { text: ":(", type: "inner", id: 1 },
        { text: "Im so sad", type: "inner", id: 2 },
      ],
    },
    {
      id: 3,
      name: "Dimon",
      profileImg:
        "https://android-obzor.com/wp-content/uploads/2022/02/16-1.jpg",
      messages: [
        { text: "Hello there!", type: "inner", id: 1 },
        { text: ":P", type: "inner", id: 2 },
      ],
    },
    {
      id: 4,
      name: "Anonym",
      profileImg:
        "https://i.pinimg.com/474x/09/fd/1f/09fd1fe5a366cc6f717a3412a626a496.jpg",
      messages: [
        { text: "Hi, did you need potato?", type: "inner", id: 1 },
        { text: ":0", type: "inner", id: 2 },
      ],
    },
    {
      id: 5,
      name: "User123",
      profileImg:
        "https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png",
      messages: [
        { text: "Hey!", type: "inner", id: 1 },
        { text: "My name is...", type: "inner", id: 2 },
      ],
    },
  ],
  newMessageText: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    case SEND_MESSAGE: {
      let stateCopy = deepCopy(state);
      stateCopy.usersData[action.id - 1].messages.push({
        text: state.newMessageText,
        type: "out",
        id: state.usersData[action.id - 1].messages.length + 1,
      });
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case SET_ACTIVE_DIALOG:
      return {
        ...state,
        activeDialog: action.user,
      };
    default:
      return state;
  }
};

export const newMessageTextActionCreator = (newText) => ({
  type: NEW_MESSAGE_TEXT,
  newText,
});
export const sendNewMessageActionCreator = ({ id }) => ({
  type: SEND_MESSAGE,
  id,
});
export const setDialogActionCreator = (user) => ({
  type: SET_ACTIVE_DIALOG,
  user,
});

export default messagesReducer;
