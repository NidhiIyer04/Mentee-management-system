/**
 * The `Cards` function is a React component that renders a group of cards with titles, images, and
 * bodies.
 * @param props - The `props` parameter in the `Cards` function is an object that contains the
 * properties passed to the `Cards` component when it is used in another component. In this case, it
 * seems that the `props` object is not being used in the component.
 * @returns The code is returning a set of Bootstrap Cards wrapped in a Row component. Each Card has an
 * image, title, body text, and a button. The data for each Card is being mapped from the `test` array
 * and passed as props to the Card component.
 */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards(props) {
  
let students=[{ title:'Card Title',
imageUrl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto:format&fit:crop&w:2074&q:80'
,body:'Hello'},
{ title:'Card Title',
imageUrl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto:format&fit:crop&w:2074&q:80'
,body:'Hello'},
{ title:'Card Title',
imageUrl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto:format&fit:crop&w:2074&q:80'
,body:'Hello'},{ title:'Card Title',
imageUrl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto:format&fit:crop&w:2074&q:80'
,body:'Hello'}
,{ title:'Card Title',
imageUrl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto:format&fit:crop&w:2074&q:80'
,body:'Hello'},{ title:'Card Title',
imageUrl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib:rb-4.0.3&ixid:M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto:format&fit:crop&w:2074&q:80'
,body:'Hello'}]


//  let { title, imageUrl, body}   = props
 console.log(props)
 props=students[0]
 let { title, imageUrl, body}   = props
  return (<>
     <Row xs={1} md={5} className="g-4">
      {students.map(({ title, imageUrl, body}, idx) => (
        <Col key={idx}>
          <Card>
          <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row></>
//     <Row xs={1} md={2} className="g-4">
//   <CardGroup>
//     {test.map(({ title, imageUrl, body})=>{
//       return(      <Card className='student-card'>
// <Card.Img variant="top" src={imageUrl} />
// <Card.Body>
//   <Card.Title>{title}</Card.Title>
//   <Card.Text>{body}</Card.Text>
//   <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>)
    


// </CardGroup>
// </Row>
  )
 
 
}

export default Cards;
