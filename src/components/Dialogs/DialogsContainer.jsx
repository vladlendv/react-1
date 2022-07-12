import {
  newMessageTextActionCreator,
  sendNewMessageActionCreator,
  setDialogActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";

// const DialogsContainer = ({ store }) => {
//   let state = store.getState().messagesPage;

//   let messageText = (value) => {
//     store.dispatch(newMessageTextActionCreator(value));
//   };
//   let sendNewMessage = () => {
//     store.dispatch(
//       sendNewMessageActionCreator({
//         id: state.messagesPage.activeDialog.id,
//         key: Date.now(),
//       })
//     );
//   };
//   let setDialog = (user) => {
//     store.dispatch(setDialogActionCreator(user));
//   };

//   return (
//     <Dialogs
//       messageText={messageText}
//       sendNewMessage={sendNewMessage}
//       usersData={state.usersData}
//       newMessageText={state.newMessageText}
//       activeDialog={state.activeDialog}
//       setDialog={setDialog}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    messageText: (value) => {
      dispatch(newMessageTextActionCreator(value));
    },
    sendNewMessage: (id, key) => {
      dispatch(
        sendNewMessageActionCreator({
          id,
          key,
        })
      );
    },
    setDialog: (user) => {
      dispatch(setDialogActionCreator(user));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
