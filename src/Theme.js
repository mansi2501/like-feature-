import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route } from "react-router";
import "./App.css";
import PostForm from "./components/PostForm";
import CardData from "./UI/CardData";
import Navbar from "./UI/Navbar";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === "light" ? "#3f51bf" : "#111",
      },
    },
  });

  const handleLight = () => {
    setThemeMode("light");
  };

  const handleDark = () => {
    setThemeMode("dark");
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar themeMode={themeMode} />
        <Route exact path="/" component={CardData} />
        <Route exact path="/postform" component={PostForm} />
      </ThemeProvider>
    </div>
  );
}

export default App;
