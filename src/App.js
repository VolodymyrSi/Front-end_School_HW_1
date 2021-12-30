import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.css";
import UserFeedPage from "./pages/UserFeedPage";
import TrendingFeedPage from "./pages/TrendingFeedPage";
import { TikTukContext } from "./context";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <TikTukContext.Provider value={{ isLoading, setIsLoading }}>
      <div className="App">
        <Routes>
          <Route element={<TrendingFeedPage />} path="/" />
          <Route element={<UserFeedPage />} path="/:currentUser" />
        </Routes>
      </div>
    </TikTukContext.Provider>
  );
};

export default App;
