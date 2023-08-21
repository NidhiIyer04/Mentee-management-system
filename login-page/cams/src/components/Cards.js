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
  let {enrnum,setenrnum,clicked,setclicked ,email } = props;
  
let students=[

//mentor1
  { title:'Veeramraju Lakshmi Ajay',
imageUrl:img,
body:{id:"21STUCHH010173"},
memail:"ajay@gmail.com",
},

{ title:'Card Title',
imageUrl:img,
body:{id:"21STUCHH010174"},
memail:"ajay@gmail.com"},

{ title:'Card Title',
imageUrl:img,
body:{id:"21STUCHH010175"},
memail:"ajay@gmail.com",},

{ title:'Card Title',
imageUrl:img,
body:{id:"21STUCHH010176"},
memail:"ajay@gmail.com",},

{ title:'Card Title',
imageUrl:img,
memail:"ajay@gmail.com",
body:{id:"21STUCHH010177"}},

//mentor2
{ title:'Card Title',
imageUrl:img,
memail:"vineeth@gmail.com",
body:{id:"21STUCHH010178"}},

{ title:'Card Title',
imageUrl:img,
memail:"vineeth@gmail.com",
body:{id:"21STUCHH010179"}},

{ title:'Card Title',
imageUrl:img,
memail:"vineeth@gmail.com",
body:{id:"21STUCHH010180"}},

{ title:'Card Title',
imageUrl:img,
memail:"vineeth@gmail.com",
body:{id:"21STUCHH010190"}},

{ title:'Card Title',
imageUrl:img,
memail:"vineeth@gmail.com",
body:{id:"21STUCHH010191"}},

//mentor3
{ title:'Card Title',
imageUrl:img,
memail:"nidhi@gmail.com",
body:{id:"21STUCHH010192"}},

{ title:'Card Title',
imageUrl:img,
memail:"nidhi@gmail.com",
body:{id:"21STUCHH010193"}},

{ title:'Card Title',
imageUrl:img,
memail:"nidhi@gmail.com",
body:{id:"21STUCHH010194"}},

{ title:'Card Title',
imageUrl:img,
memail:"nidhi@gmail.com",
body:{id:"21STUCHH010195"}},

{ title:'Card Title',
imageUrl:img,
memail:"nidhi@gmail.com",
body:{id:"21STUCHH010196"}},

//mentor4
{ title:'Card Title',
imageUrl:img,
memail:"gaurav@gmail.com",
body:{id:"21STUCHH010197"}},

{ title:'Card Title',
imageUrl:img,
memail:"gaurav@gmail.com",
body:{id:"21STUCHH010198"}},

{ title:'Card Title',
imageUrl:img,
memail:"gaurav@gmail.com",
body:{id:"21STUCHH010199"}},

{ title:'Card Title',
imageUrl:img,
memail:"gaurav@gmail.com",
body:{id:"21STUCHH010200"}},

{ title:'Card Title',
imageUrl:img,
memail:"gaurav@gmail.com",
body:{id:"21STUCHH010201"}},


//mentor5
{ title:'Card Title',
imageUrl:img,
memail:"tanishq@gmail.com",
body:{id:"21STUCHH010202"}},

{ title:'Card Title',
imageUrl:img,
memail:"tanishq@gmail.com",
body:{id:"21STUCHH010203"}},

{ title:'Card Title',
imageUrl:img,
memail:"tanishq@gmail.com",
body:{id:"21STUCHH010204"}},

{ title:'Card Title',
imageUrl:img,
memail:"tanishq@gmail.com",
body:{id:"21STUCHH010205"}},

{ title:'Card Title',
imageUrl:img,
memail:"tanishq@gmail.com",
body:{id:"21STUCHH010205"}},

]


//  let { title, imageUrl, body}   = props
 console.log(props)
 props=students[0]
//  let { title, imageUrl, body}   = props
function click (e){
  setenrnum(e)
  setclicked(true)
}

  return (<>
     <Row xs={1} md={4} className="g-4">
      {students.map(({ title, imageUrl, body,memail}, idx) => (
        memail===email &&<>
        <Col key={idx}>
          <Card className='Card-container'>
          <Card.Img variant="top" src={imageUrl} height={"280px"} />
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
