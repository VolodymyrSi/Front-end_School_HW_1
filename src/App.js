import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserFeedPage from "./pages/UserFeedPage";
import TrendingFeedPage from "./pages/TrendingFeedPage";

export const Context = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Context.Provider value={{ isLoading, setIsLoading }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<TrendingFeedPage />} />
          <Route path="/:currentUser" element={<UserFeedPage />} />
        </Routes>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
