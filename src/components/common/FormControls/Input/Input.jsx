import React from "react";

import { FormControl } from "../FormControl";

const Input = (props) => {
  return (
    <FormControl {...props}>
      <input {...props.input} placeholder={props.label} type={props.type} />
    </FormControl>
  );
};

export default Input;
