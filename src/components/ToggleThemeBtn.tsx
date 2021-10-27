import { createStyles, Fab, makeStyles, Theme } from "@material-ui/core";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: "fixed",
      bottom: "3rem",
      right: "3rem",
    },
  })
);

const ToggleThemeBtn = () => {
  const classes = useStyles();

  // context
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color="primary"
      variant="extended"
      className={classes.floatBtn}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleThemeBtn;
