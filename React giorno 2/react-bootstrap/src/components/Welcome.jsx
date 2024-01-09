import { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Welcome extends Component {
  render() {
    return (
      <Container className="bg-body-tertiary text-center my-3 py-3">
        <h1>TUTTI I LIBRI CHE CERCHI SONO QUI!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          adipisci facilis voluptate enim tempora, eveniet labore id eum
          incidunt debitis dolorum magnam natus possimus sed veniam illum ea eos
          rerum?
        </p>
      </Container>
    );
  }
}
