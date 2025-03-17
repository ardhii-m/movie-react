import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import Navigation from "./components/Navigation";
import NowPlayingPage from "./pages/NowPlayingPage";
import UpcomingPage from "./pages/UpcomingPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import FavoritePage from "./pages/FavoritePage";

// TODO
// Hero

function App() {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemeProvider value={themeContextValue}>
      <div
        data-theme={theme === "light" ? "light" : "dark"}
        className="flex flex-col min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-all duration-300"
      >
        <Navigation />
        <main className="flex-grow pt-4 mx-5">
          <Routes>
            <Route path="/" element={<NowPlayingPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/detail/:movieId" element={<DetailPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
