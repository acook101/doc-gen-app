import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { run } from "../utils/process";

export const InputField = () => {
  const [state, setState] = React.useState("prompt");

  const handleChange = (event: any) => {
    setState(event.target.value);
   // console.log("the value is ", state, event.target.value);
  };
  const handleClick = (event: any) => {
    setState(event.target.value);
    run(state);
    console.log("the result of run() is ", state);
  };
  return (
    <>
      <span>
        <TextField id="input" onChange={handleChange} value={state}>
          {" "}
        </TextField>
      </span>
      <span>
        <Button variant="contained" onClick={handleClick}>
          Get Context!
        </Button>
        <h2>State : {state}</h2>
      </span>
    </>
  );
};
