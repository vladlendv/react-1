import {
  newMessageTextActionCreator,
  sendNewMessageActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  let state = store.getState()
  let messageText = (value) => {
    store.dispatch(newMessageTextActionCreator(value));
  };
  let sendNewMessage = () => {
    store.dispatch(
      sendNewMessageActionCreator({
        id: state.messagesPage.activeDialog.id,
        key: Date.now(),
      })
    );
  };

  return (
    <Dialogs
      messageText={messageText}
      sendNewMessage={sendNewMessage}
      usersData={state.messagesPage.usersData}
      newMessageText={state.messagesPage.newMessageText}
      activeDialog={state.messagesPage.activeDialog}
      profileInfo={state.profilePage.profileInfo}
      store={store}
    />
  );
};

export default DialogsContainer;
