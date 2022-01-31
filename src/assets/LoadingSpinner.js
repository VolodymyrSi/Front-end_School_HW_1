import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <Spinner
      animation="border"
      style={{ position: "fixed", top: "50%", left: "50%" }}
    />
  );
};

export default LoadingSpinner;
