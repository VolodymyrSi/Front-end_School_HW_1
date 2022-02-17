import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserFeedPage from "./pages/UserFeedPage.tsx";
import TrendingFeedPage from "./pages/TrendingFeedPage.tsx";
import { TikTukContext } from "./store/context";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const contextValues = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading, setIsLoading]
  );
  return (
    <TikTukContext.Provider value={contextValues}>
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
