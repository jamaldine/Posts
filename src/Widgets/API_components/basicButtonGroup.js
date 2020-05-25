import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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
  const { setActive } = props;
  const handleActive=()=>{
    setActive(true)
  }
  const handleDeactive=()=>{
    setActive(false)
  }
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleActive}>
          <Table />
        </Button>
        <Button onClick={handleDeactive}>
          <Grid />
        </Button>
      </ButtonGroup>
    </div>
  );
}
