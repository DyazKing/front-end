import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IArticle from '../interfaces/IArticle'
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export default function ArticlesList() {
    const [articles, setArticles] = useState<IArticle[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('https://api.spaceflightnewsapi.net/v4/articles')
            .then((response) => {
                setArticles(response.data.results)
            })
    }, [])
  return (
    <>
      {articles.map(article => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            {article.summary}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(`/articles/${article.id}`)}>Detail</Button>
        </Card.Body>
      </Card>
      ))}
    </>
  )
}
