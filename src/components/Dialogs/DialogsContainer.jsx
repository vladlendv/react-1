import {
  setMessageText,
  sendNewMessage,
  setDialog,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
});

const DialogsContainer = connect(mapStateToProps, {
  setMessageText,
  sendNewMessage,
  setDialog,
})(Dialogs);

export default DialogsContainer;
