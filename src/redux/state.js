const store = {
  _redrawDOM() {
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
      messagesData: [
        { id: 1, message: "Where am I?" },
        { id: 2, message: "I don't know" },
        { id: 3, message: ":(" },
        { id: 4, message: "Hello there" },
      ],
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

  _addCharAtPost(currentChar) {
    store._state.profilePage.newPostText = currentChar;
    store._redrawDOM(store._state);
  },

  getState() {
    return store._state;
  },

  _addPost() {
    const newPost = {
      id: 4,
      message: store._state.profilePage.newPostText,
      like: 0,
    };
    store._state.profilePage.postData.push(newPost);
    store._state.profilePage.newPostText = "";
    store._redrawDOM(store._state);
  },

  subscribe(observer) {
    store._redrawDOM = observer;
  },
};

export default store;
