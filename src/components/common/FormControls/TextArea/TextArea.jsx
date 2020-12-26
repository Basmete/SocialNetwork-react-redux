import React from "react";

import { FormControl } from "../FormControl";

const TextArea = (props) => {
  return (
    <FormControl {...props}>
      <textarea {...props.input} placeholder={props.label} />
    </FormControl>
  );
};

export default TextArea;
