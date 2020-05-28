import React from "react";
//import Button from "@material-ui/core/Button";
//import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Button, ButtonGroup } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Grid } from "react-bootstrap-icons";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup(props) {
  const classes = useStyles();
  const { setActive, tuile_table, handleTuile, handleTable } = props;
  const handleActive = () => {
    setActive(true);
    handleTable()
  };
  const handleDeactive = () => {
    setActive(false);
    handleTuile()
  };
  return (
    <div className={classes.root}>
      <ButtonGroup aria-label="Basic example">
        <Button onClick={handleActive} variant="danger" style={{border : tuile_table ? "2px solid black" : null}}>
          <Table />
        </Button>
        <Button onClick={handleDeactive} variant="danger" style={{border : tuile_table ? null : "2px solid black"}}>
          <Grid />
        </Button>
      </ButtonGroup>
    </div>
  );
}
