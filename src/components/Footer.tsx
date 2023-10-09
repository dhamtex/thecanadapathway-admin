const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        background: "white",
        width: "100%",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </div>
  );
};

export default Footer;
