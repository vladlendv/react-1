import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

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
      profileInfo: {
        firstName: "Vladlen",
        lastName: "Dvornikov",
        profileImg:
          "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg",
        getFullName() {
          return this.firstName + " " + this.lastName;
        },
      },
    },
    messagesPage: {
      activeDialog: {
        id: 1,
        name: "",
      },
      usersData: [
        {
          id: 1,
          name: "Katya",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/4-1.jpg",
          messages: [
            { text: "Where am I?", type: "inner", key: "1" },
            { text: "I dont know", type: "inner", key: "2" },
          ],
        },
        {
          id: 2,
          name: "Roman",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/6-1.jpg",
          messages: [
            { text: ":(", type: "inner", key: 1 },
            { text: "Im so sad", type: "inner", key: 2 },
          ],
        },
        {
          id: 3,
          name: "Dimon",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/16-1.jpg",
          messages: [
            { text: "Hello there!", type: "inner", key: 1 },
            { text: ":P", type: "inner", key: 2 },
          ],
        },
        {
          id: 4,
          name: "Anonym",
          profileImg:
            "https://i.pinimg.com/474x/09/fd/1f/09fd1fe5a366cc6f717a3412a626a496.jpg",
          messages: [
            { text: "Hi, did you need potato?", type: "inner", key: 1 },
            { text: ":0", type: "inner", key: 2 },
          ],
        },
        {
          id: 5,
          name: "User123",
          profileImg:
            "https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png",
          messages: [
            { text: "Hey!", type: "inner", key: 1 },
            { text: "My name is...", type: "inner", key: 2 },
          ],
        },
      ],
      newMessageText: "",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
