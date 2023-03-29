import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function card({profile}) {
    
  return (
    <div>
    <Card style={{ width: '18rem' ,height:'15rem',marginTop:"3rem"}}>
      <Card.Body>
        <Card.Title style={{display:"flex",alignItems:"center",marginTop:"5%"}}>{profile}</Card.Title>
        {/* <Card.Text>
          Email Id : {}
        </Card.Text> */}
        <Button variant="primary" style={{ marginTop:"5rem"}}>Add Password</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
