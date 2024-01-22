import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand">
            Spaceflight
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
