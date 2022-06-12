import img from "./sorry_1.jpg";

const ErrorMessage = () => {
  return (    
    <img
      src={img}
      alt="error"
      style={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contain",
        margin: "100px auto",
      }}
    />
  );
};

export default ErrorMessage;
