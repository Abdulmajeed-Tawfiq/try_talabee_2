import React from "react";
import { Button, Spinner } from "reactstrap";

const LoadingButton = ({ className = 'LoadinButton',isLoading = false, ...props }) => {
  return (
    <Button className={className} disabled={isLoading} {...props}>
      {isLoading ? <Spinner style={{ marginRight: "10px" }} size="sm" /> : null}
      <span >{props.children}</span>
    </Button>
  );
};



export { LoadingButton };
