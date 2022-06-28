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
        name: ''
      },
      messagesData: {
        1: {
          messages: [
            'Where am I?',
            'I dont know',
          ]
        },
        2: {
          messages: [
            ':(',
            'Im so sad',
          ]
        },
        3: {
          messages: [
            'Hello there!',
            ':P',
          ]
        },
        4: {
          messages: [
            'Hi, did you need potato?',
            ':0',
          ]
        },
        5: {
          messages: [
            'Hey!',
            'My name is...',
          ]
        },
      },
        
        // { id: 1, messages: "Where am I?" },
        // { id: 2, messages: "I don't know" },
        // { id: 3, messages: ":(" },
        // { id: 4, messages: "Hello there" },
      // ],
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

  setActiveDialog(user) {
    this._state.messagesPage.activeDialog = user;
    this._callSubscriber(this._state);
  },

  sendMessage(userId, message) {
    this._state.messagesPage.messagesData[userId].messages.push(message);
    this._callSubscriber(this._state);
  },

  addCharAtPost(currentChar) {
    this._state.profilePage.newPostText = currentChar;
    this._callSubscriber(this._state);
  },

  getState() {
    return this._state;
  },

  addPost() {
    const newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      like: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
