import { useParams } from "react-router-dom";

function StudentInfo(){

    const {id} = useParams();

    return(
    <>
        <h1> Hallo! {id} </h1>
    
    </>

    );
}

export default StudentInfo;