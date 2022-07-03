const SEND_MESSAGE = "SEND-MESSAGE";
const SET_ACTIVE_DIALOG = "SET-ACTIVE-DIALOG";
const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    case SEND_MESSAGE:
      state.usersData[action.id - 1].messages.push({
        text: state.newMessageText,
        type: "out",
      });
      state.newMessageText = "";
      break;
    case SET_ACTIVE_DIALOG:
      state.activeDialog = action.user;
      break;
    default:
      break;
  }

  return state;
};

export const newMessageTextActionCreator = (newText) => ({
  type: NEW_MESSAGE_TEXT,
  newText,
});
export const sendNewMessageActionCreator = ({ id, key, messageValue }) => ({
  type: SEND_MESSAGE,
  id,
  key,
});
export const setDialogActionCreator = (user) => ({
  type: SET_ACTIVE_DIALOG,
  user: user,
});

export default messagesReducer;
