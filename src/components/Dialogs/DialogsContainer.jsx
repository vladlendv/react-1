import {
  newMessageTextActionCreator,
  sendNewMessageActionCreator,
  setDialogActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
});
const mapDispatchToProps = (dispatch) => ({
  messageText: (value) => dispatch(newMessageTextActionCreator(value)),
  sendNewMessage: (id, key) =>
    dispatch(
      sendNewMessageActionCreator({
        id,
        key,
      })
    ),
  setDialog: (user) => dispatch(setDialogActionCreator(user)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
