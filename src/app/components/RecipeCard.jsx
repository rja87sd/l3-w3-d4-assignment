// Credit to ChatGPT for comments and assistance.
'use client';
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function RecipeCard({ img, recipeName, desc, ingredients }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Card>
      <Card.Img variant="top" src={img} alt={"Image courtesy of Unsplash"}/>
      <Card.Body>
        <Card.Title>{recipeName}</Card.Title>
        <Card.Text>
          {collapsed ? `${desc.substring(0, 100)}...` : desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* Map over the ingredients array to display each ingredient */}
        {ingredients.map((ingredient, index) => (
          <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        {/* Show More button */}
        <Button variant="primary" onClick={toggleCollapse}>
          {collapsed ? "Show More" : "Show Less"}
        </Button>
      </Card.Body>
    </Card>
  );
}
