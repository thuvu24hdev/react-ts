import { Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import TopMovies from "./components/TopMovies";
import AuthContextProvider from "./context/AuthContext";
import MovieContextProvider from "./context/MovieContext";
import ProgressContextProvider from "./context/ProgressContext";
import ThemeContextProvider from "./context/ThemeContext";
import TopMovieContextProvider from "./context/TopMovieContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <TopMovieContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </TopMovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
