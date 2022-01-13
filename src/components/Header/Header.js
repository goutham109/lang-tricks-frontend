import React from "react";
import "./Header.css";
import { Container, Button } from "react-bootstrap";

function Header() {
  return (
    <div id="heading-block">
      <Container className="logo-content">
        <h1>LangTricks</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </div>
    // <div id="heading-block">
    //   <div className="container-fluid py-5 logo-content">
    //     <h1 className="display-5 fw-bold" style={{ fontSize: "41.623px" }}>
    //       LangTricks
    //     </h1>
    //     <p className="col-md-8 fs-4 logo-p">
    //       Using a series of utilites, yuj can fljf jfl jf fjjfjfj jj fjlf fsfs
    //       lfsjfslsf{" "}
    //     </p>
    //   </div>
    // </div>
  );
}

export default Header;
