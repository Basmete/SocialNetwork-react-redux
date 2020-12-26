import React from "react";

import * as styles from "../FormControls.module.css";

const FormControl = ({ input, meta: { error, touched }, children }) => {
  const hasError = touched && error;

  return (
    <div className={styles.formControl + " " + styles.error}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export default FormControl;
