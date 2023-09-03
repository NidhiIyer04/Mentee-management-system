import { Button } from "bootstrap";
import './A.CSS'
import img from 'D:\\Mentor\\Mentee-management-system\\login-page\\cams\\src\\components\\Images\\21STUCHH010173.jpg'
import ControlledTabs from "./ControlledTabs";

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
    

function Dashboard(props){
    let {email,enrnum,setclicked,setenrnum}=props
    return(
        <>
  

<div className="container" style={{"margin-left":" 0px","margin-right": "10px;"}}>
    
<div className="content-wrapper">
    
    <div className="email-app card-margin">
     
        <div className="email-list-wrapper">
            
            <div className="email-list-header">
                
                <div className="dropdown">
                    <button className="btn btn-sm btn-flash-border-base shadow-none dropdown-toggle" type="button" id="dropdownMenuButton" onClick={()=>{setclicked(false)}} data-toggle="left" aria-haspopup="true" aria-expanded="false">
                        Back
                    </button>
            
                </div>
            </div>
            <div id="email-app-body" className="email-list-scroll-container ps ps--active-y">
                <ul className="email-list">

                    {/* <li className="email-list-item">
                        <div className="recipient">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Profile Picture" />
                            <a href="#" className="recipient-name">Pepper Potts</a>
                        </div>
                        <a href="#" className="email-subject">Food App IOS &amp; Android - Need confirmation to start project execution<i className="unread">&nbsp;</i></a>
                        <div className="email-footer">
                            <div className="email-action">
                                <a href="#" className="important">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="feather feather-bookmark fill"
                                    >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="starred">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="feather feather-star"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </a>
                                <a href="#" className="attachment">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="feather feather-paperclip"
                                    >
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                    </svg>
                                </a>
                            </div>
                            <span className="email-time">11:50 AM</span>
                        </div>
                    </li> */}
                    {students.map(({ title, imageUrl, body,memail})=>{
                        return( <>
                       {     memail==email &&<>
                        <li className="email-list-item" onClick={()=>{setenrnum(body.id)}}>
                        <div className="recipient">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Profile Picture" />
                            <a href="#" className="recipient-name">{title}</a>
                        </div>
                        <a href="#" className="email-subject">
                        Enr_NO: {body.id} 
                        { enrnum ===body.id && <><i className="unread">&nbsp;</i></> }
                        </a>
                        <div className="email-footer">
                          
                        </div>
                    </li>
                        </>}</>)
                    })}
                 
                </ul>
                <div className="ps__rail-x" style={{"left": "0px", "bottom": "0px"}}><div className="ps__thumb-x" tabindex="0" style={{"left": "0px", "width": "0px"}}></div></div>
                <div className="ps__rail-y" style={{"top": "0px", "height": "911px", "right": "0px"}}><div className="ps__thumb-y" tabindex="0" style={{"top": "0px", "height": "772px"}}></div></div>
            </div>
        </div>
        {/* <div className="email-desc-wrapper">
            <div className="email-header">
                <div className="email-date">Dec 1, 2019 12:02 PM</div>
                <div className="email-subject">Prepare Mockup as per the spec document and Submit by Monday!!!</div>
                <p className="recipient"><span>From:</span> Paul Smith &lt;paul.smith@domain.com&gt;</p>
            </div>
            <div className="email-body">
                <p>Hi Jacob,</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan orci ac urna tristique luctus. Duis sollicitudin quam eu ante faucibus, in fringilla sem placerat. Praesent eget nisi quis mauris luctus dignissim.
                    Nullam vel commodo augue, vitae auctor odio. Sed vel placerat nisi. Aliquam erat volutpat. Etiam mattis nisl magna, vel laoreet dolor hendrerit ut.
                </p>
                <p>
                    Etiam condimentum accumsan ligula eu ornare. Ut bibendum, lacus et tempus molestie, eros velit tincidunt felis, in dictum dolor nulla non dolor. Nulla ut dui gravida, interdum massa non, egestas lacus. Praesent hendrerit
                    nisl pellentesque massa aliquam, nec ultrices risus condimentum.
                </p>
                <p>
                    Thanks &amp; Regards <br />
                    Julian Cruise
                </p>
            </div>
            <div className="email-attachment">
                <div className="file-info">
                    <div className="file-size">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-paperclip">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                        </svg>
                        <span>Attachment (90 MB)</span>
                    </div>
                    <button className="btn btn-sm btn-soft-base">View All</button>
                    <button className="btn btn-sm btn-soft-success">Download All</button>
                </div>
                <ul className="attachment-list">
                    <li className="attachment-list-item"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Showcase" title="Showcase" /></li>
                    <li className="attachment-list-item"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Showcase" title="Showcase" /></li>
                    <li className="attachment-list-item"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Showcase" title="Showcase" /></li>
                    <li className="attachment-list-item"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Showcase" title="Showcase" /></li>
                    <li className="attachment-list-item"><span className="text-base">30+</span></li>
                </ul>
            </div>
       
        </div> */}
<div>
     <ControlledTabs/>
</div>

    </div>
</div> 
</div>
   
   
            </>

    )
}


export default Dashboard;