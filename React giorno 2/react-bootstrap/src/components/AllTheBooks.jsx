import { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import fantasyBooks from "../assets/json/fantasy.json";
import historyBooks from "../assets/json/history.json";
import horrorBooks from "../assets/json/horror.json";
import romanceBooks from "../assets/json/romance.json";
import scifiBooks from "../assets/json/scifi.json";

let fantasy = fantasyBooks;
let history = historyBooks;
let horror = horrorBooks;
let romance = romanceBooks;
let scifi = scifiBooks;
console.log(fantasy, history, horror, romance, scifi);

export default class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <h2 className="my-3">Fantasy</h2>
        <Row className="gap-3 justify-content-between">
          {fantasy.map((book) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}
