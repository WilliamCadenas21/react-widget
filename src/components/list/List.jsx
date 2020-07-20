import React from "react";
import calculateUserTime from "../../utils/timeChanger.js";
import { Card, CardHeader, Content, Container, Name, Date } from "./List.styles.js";

const List = (props) => {
  const { posts } = props;
  console.log(posts);

  if (!posts || posts.length === 0) return <p>No posts, sorry</p>;

  const listItems = posts.map((post) => {
    const time = calculateUserTime(post.created_at);
    return (
      <Card key={post.id}>
        <CardHeader>
          <Name> {post.user.name} </Name>
          <Date> {time} </Date>
        </CardHeader>
        <Content> {post.text}</Content>
      </Card>
    );
  });

  return <Container>{listItems}</Container>;
};

export default List;
