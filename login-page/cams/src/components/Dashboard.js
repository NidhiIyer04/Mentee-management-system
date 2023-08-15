import { Button } from "bootstrap";

function Dashboard(props){
    return(
        <>
        <h6>
            {props.en}
            </h6>
            <button onClick={()=>{props.setclicked(false)}}>Back</button>
            
            </>

    )
}

export default Dashboard;