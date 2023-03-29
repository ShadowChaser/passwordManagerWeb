import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function card({profile}) {
    
  return (
    <div>
    <Card style={{ width: '18rem' ,height:'15rem' }}>
      <Card.Body>
        <Card.Title style={{display:"flex",justifyItems:"center"}}>{profile}</Card.Title>
        <Card.Text>
          Email Id : {}
        </Card.Text>
        <Button variant="primary">Add Password</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
