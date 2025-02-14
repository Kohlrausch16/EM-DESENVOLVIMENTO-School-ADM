import { ContentArea, ContentContainer, StudentPicture, StudentInfoDescription, Line } from "./StudentInfoStyle";
import { useParams } from "react-router-dom";
import { studentsTest } from "../axios"; 
import LateralMenu from "../layouts/LateralMenu";

function StudentInfo(){

    const {id} = useParams();

    const student = studentsTest.find((item) => {
        return item.id == id;
    });

    return(
    <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <StudentInfoDescription>
                    <StudentPicture />
                    <Line />

                    <h1> {student?.first_name} {student?.first_name}</h1>

                </StudentInfoDescription>


            </ContentContainer>




        </ContentArea>


        
    
    </>

    );
}

export default StudentInfo;