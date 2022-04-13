import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/content-dev"
          aria-label="My GitHub"
        >
          Armando Hernandez
        </a>{" "}
        using <i className="fab fa-react" />

      </Container>
    </footer>
  );
};

export default Footer;
