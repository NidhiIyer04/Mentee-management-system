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
import img from 'D:\\Mentor\\Mentee-management-system\\login-page\\cams\\src\\components\\Images\\21STUCHH010173.jpg'
function Cards(props) {
  let {enrnum,setenrnum,clicked,setclicked ,email } = props;
  
let students=[{ title:'Veeramraju Lakshmi Ajay',
imageUrl:img
,body:{id:"21STUCHH010173"},
memail:"ajay",
},
{ title:'Card Title',
imageUrl:img
,body:{id:"21STUCHH0104"},
memail:"a"},

{ title:'Card Title',
imageUrl:img
,body:{id:"21STUCHH01011"}},{ title:'Card Title',
imageUrl:img,
memail:"a"
,body:{id:"21STUCHH0103"}}
,{ title:'Card Title',
memail:"b",
imageUrl:img
,body:{id:"21STUCHH0102"}},{ title:'Card Title',
imageUrl:img,
memail:"b"
,body:{id:"21STUCHH0101"}}]


//  let { title, imageUrl, body}   = props
 console.log(props)
 props=students[0]
//  let { title, imageUrl, body}   = props
function click (e){
  setenrnum(e)
  setclicked(true)

}
  return (<>
     <Row xs={1} md={5} className="g-4">
      {students.map(({ title, imageUrl, body,memail}, idx) => (
        memail===email &&<>
        <Col key={idx}>
          <Card>
          <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title >{title}</Card.Title>
              <Card.Text>
                <pre>
              { body.id}
               </pre>
              </Card.Text>
              <Button variant="primary" onClick={()=>click(body.id)}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col></>
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
