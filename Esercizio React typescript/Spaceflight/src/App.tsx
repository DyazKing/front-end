import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import ArticlesList from "./Components/ArticlesList";
import { Container } from "react-bootstrap";
import DetailPage from "./Components/DetailPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container className="d-flex flex-wrap justify-content-center gap-5">
          <Routes>
            <Route path="/" element={<ArticlesList />}></Route>
            <Route path="/articles/:id" element={<DetailPage />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
