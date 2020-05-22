import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
//React.forwardRef((ref)
export const SwitchLabels = React.forwardRef((props,ref) => {
  console.log('res',ref)

  const [checkSwitch, setCheckSwitch] = React.useState(false);

  const handleChange = (event) => {
    setCheckSwitch(event.target.checked);
    props.setShowComment(event.target.checked);
  };

  console.log('res state', checkSwitch)
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            inputRef={ref}
            checked={checkSwitch}
            onChange={handleChange}
            name="checkedSwitch"
          />
        }
        label = {`${ checkSwitch ? "with comment" : "whithout comment" }`}
      />
      
    </FormGroup>
  );
});
