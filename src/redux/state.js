const ADD_POST = "ADD-POST";
const ADD_CHAR_AT_POST = "ADD-CHAR-AT-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const SET_ACTIVE_DIALOG = "SET-ACTIVE-DIALOG";

const store = {
  _callSubscriber() {
    console.log("State changed");
  },
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", like: 15 },
        { id: 2, message: "Hello everyone!", like: 39 },
        { id: 3, message: "JavaScript or...", like: 120325 },
      ],
      newPostText: "",
    },
    messagesPage: {
      activeDialog: {
        id: 1,
        name: "",
      },
      messagesData: {
        1: {
          messages: ["Where am I?", "I dont know"],
        },
        2: {
          messages: [":(", "Im so sad"],
        },
        3: {
          messages: ["Hello there!", ":P"],
        },
        4: {
          messages: ["Hi, did you need potato?", ":0"],
        },
        5: {
          messages: ["Hey!", "My name is..."],
        },
      },
      usersData: [
        {
          id: 2,
          name: "Roman",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/6-1.jpg",
        },
        {
          id: 1,
          name: "Katya",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/4-1.jpg",
        },
        {
          id: 3,
          name: "Dimon",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/16-1.jpg",
        },
        {
          id: 4,
          name: "Anonym",
          profileImg:
            "https://i.pinimg.com/474x/09/fd/1f/09fd1fe5a366cc6f717a3412a626a496.jpg",
        },
        {
          id: 5,
          name: "User123",
          profileImg:
            "https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: 4,
          message: this._state.profilePage.newPostText,
          like: 0,
        };
        this._state.profilePage.postData.unshift(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case ADD_CHAR_AT_POST:
        this._state.profilePage.newPostText = action.currentChar;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        this._state.messagesPage.messagesData[action.userId].messages.push(
          action.message
        );
        this._callSubscriber(this._state);
        break;
      case SET_ACTIVE_DIALOG:
        this._state.messagesPage.activeDialog = action.user;
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addCharAtPostActionCreator = (text) => ({
  type: ADD_CHAR_AT_POST,
  currentChar: text,
});

export const sendNewMessageActionCreator = (activeDialog, messageValue) => ({
  type: SEND_MESSAGE,
  userId: activeDialog,
  message: messageValue,
});

export const setDialogActionCreator = (user) => ({
  type: SET_ACTIVE_DIALOG,
  user: user,
});

export default store;
window.store = store;
