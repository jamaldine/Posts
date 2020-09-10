import React from "react";
//import Button from "@material-ui/core/Button";
//import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Button, ButtonGroup } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Grid } from "react-bootstrap-icons";
import './styles/basicButtonGroup.css'
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
    <ButtonGroup aria-label="Basic example">
      <Button className='tuile_table' onClick={handleActive} variant="danger" style={{border : tuile_table ? "3px solid black" : null}}>
        <Table />
      </Button>
      <Button className='tuile_table' onClick={handleDeactive} variant="danger" style={{border : tuile_table ? null : "3px solid black"}}>
        <Grid />
      </Button>
    </ButtonGroup>
  );
}
