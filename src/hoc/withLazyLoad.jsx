import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";

export const withLazyLoad = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Spinner animation={"grow"} />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
