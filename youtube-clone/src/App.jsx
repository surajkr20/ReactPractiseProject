import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderSection/Header";
import Feed from "./Components/FeedSection/Feed";
import SearchVideoResult from "./Components/SearchSection/SearchVideoResult";
import VideoDetails from "./Components/VideoSection/VideoDetails";
import { AppContext } from "./useContextHook/useContextApi"; // Ensures context is used correctly

const App = () => {
  return (
    <AppContext> {/* Wrap the entire app in the context provider */}
      <BrowserRouter>
        <div className="flex flex-col w-full">
          <Header /> {/* Header Component */}
          <Routes>
            <Route path="/" element={<Feed />} /> {/* Home/Feed Route */}
            <Route
              path="/search/:searchQuery"
              element={<SearchVideoResult />} // Search Video Result Route
            />
            <Route
              path="/video/:categoryId/:videoId"
              element={<VideoDetails />} // Video Details Route
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
