import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({store}) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar store={store} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile store={store} profilePage={store.getState().profilePage} />}
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs store={store} dispatch={store.dispatch} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
