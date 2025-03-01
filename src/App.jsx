import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import Navigation from "./components/Navigation";
import NowPlayingPage from "./pages/NowPlayingPage";
import UpcomingPage from "./pages/UpcomingPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

// TODO
//  PWA
//  - Manifest

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
        <header className="flex flex-col sm:flex-row items-center gap-4 justify-between px-8 shadow-md py-4">
          <h1 className="text-center font-bold text-3xl sm:text-3xl">
            MOVIE CATALOGUE
          </h1>
          <Navigation />
        </header>
        <main className="flex-grow pt-4 mx-5">
          <Routes>
            <Route path="/" element={<NowPlayingPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/detail/:movieId" element={<DetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
