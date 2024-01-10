import React, { Component } from "react";
import CommentList from "./CommentList";

export default class CommentArea extends Component {
  state = {
    comments : []
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/books/0316438960/comments",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2FmOGMwNTgzNTAwMTg1MjMwNzkiLCJpYXQiOjE3MDQ4OTY3OTksImV4cCI6MTcwNjEwNjM5OX0.A30l68OcEpSVkQjczZxuddvyXWR-wWHV8zfuSyQArEE",
          },
        }
      );
      const data = await response.json();
      this.setState({ comments: data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return(
        <>
        <CommentList comments={this.state.comments}/>
        </>
    )
  }
}
