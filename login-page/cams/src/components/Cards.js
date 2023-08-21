import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';
import img from 'C:\\Users\\gaura\\Desktop\\Mentor\\Mentee-management-system\\login-page\\cams\\src\\components\\Images\\21STUCHH010173.jpg'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/**
 * The `Cards` function is a React component that renders a list of cards based on the `students` array
 * and handles a click event on each card.
 * @param props - The `props` parameter is an object that contains the properties passed to the `Cards`
 * component. These properties include `enrnum`, `setenrnum`, `clicked`, `setclicked`, and `email`.
 * @returns The Cards component is returning a JSX element that contains a Row component with multiple
 * Card components inside it. The Card components display information such as title, imageUrl, and
 * body.id. There is also a button inside each Card component that triggers the click function when
 * clicked.
 */


function Cards(props) {
  let students=[{ title:'Veeramraju Lakshmi Ajay',
imageUrl:img
,body:{id:"21STUCHH010173"},
memail:"ajay",
},

{ title:'Card Title',
imageUrl:img,
body:{id:"21STUCHH0104"},
memail:"a"},

{ title:'Card Title',
imageUrl:img,
memail:"b",
body:{id:"21STUCHH01011"}},

{ title:'Card Title',
imageUrl:img,
memail:"a",
body:{id:"21STUCHH0103"}},

{ title:'Card Title',
memail:"b",
imageUrl:img,
memail:"abc@abc",
body:{id:"21STUCHH0102"}},

{ title:'Card Title',
imageUrl:img,
memail:"b",
body:{id:"21STUCHH0101"}}]

  let {enrnum,setenrnum,clicked,setclicked ,email } = props;
  


//  let { title, imageUrl, body}   = props
//  console.log(props)
//  props=students[0]
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
          <Card >
          <Card.Img variant="top" src={imageUrl}  height="250px"/>
            <Card.Body>
              <Card.Title >{title}</Card.Title>
              <Card.Text>
                <pre>
              {body.id}
               </pre>
              </Card.Text>
              <Button variant="primary" onClick={()=>click(body.id)}>View More</Button>
            </Card.Body>
          </Card>
        </Col></>
      ))}
    </Row></>

  )
 
 
}

export default Cards;
