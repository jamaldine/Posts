import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [home, setHome] = useState(false);
  const redirect = () => {
    setHome(true);
  };
  useEffect(() => {
    return <Redirect to="/" />;
  }, [home]);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Statistic</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              to="/posts"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
            >
              Posts
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/map">Map</Link>
          </Typography>
          <Button color="inherit" onClick={redirect}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
