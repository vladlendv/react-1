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
          name: "Dimond",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/16-1.jpg",
        },
        {
          id: 5,
          name: "Demon",
          profileImg:
            "https://android-obzor.com/wp-content/uploads/2022/02/16-1.jpg",
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
  // setActiveDialog(user) {},
  
  // sendMessage(userId, message) {},
  // addCharAtPost(currentChar) {},
  // addPost() {},
  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-CHAR-AT-POST") {
      this._state.profilePage.newPostText = action.currentChar;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      this._state.messagesPage.messagesData[action.userId].messages.push(
        action.message
      );
      this._callSubscriber(this._state);
    } else if (action.type === "SET-ACTIVE-DIALOG") {
      this._state.messagesPage.activeDialog = action.user;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
