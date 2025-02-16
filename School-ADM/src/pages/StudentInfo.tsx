import { IconContainer, TextTitle, LenguageIcons, StudentInfoContainer, CourseFeeContainer, AddIcon, TextBody, Header, ContentArea, ContentContainer, StudentInfoDescription } from "./StudentInfoStyle";
import { useParams } from "react-router-dom";
import { studentsTest } from "../axios"; 
import LateralMenu from "../layouts/LateralMenu";

import HomeClassCard from "../layouts/HomeClassCard";

import { classContent } from "../axios";

import PictureSection from "../components/PictureSection";
import StudentInfoSection from "../components/StudentInfoSection";
import ButtonContainer from "../components/ButtonContainer";
import PaymentFeeSection from "../components/PaymentFeeSection";

type StudentDataProps = {
    id: string;
    picture: string;
    name: string;
    age: string;
    phone: string;
    courses: [
        {
            id: string;
            lenguageFlag: string;
            className: string;
            level: string;
        }
    ];
}

function StudentInfo(){

    const {id} = useParams();

    const student: StudentDataProps | undefined = studentsTest.find((item) => {
        return item.id === id;
    });

    return(
    <>     
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <StudentInfoDescription>
                    <PictureSection picture={student.picture} />       
                    <Header>
                        <StudentInfoContainer>
                            <StudentInfoSection studentInfo={student} />
                        </StudentInfoContainer>
                        <ButtonContainer />
                    </Header>

                    <TextBody>

                        <TextTitle> TURMAS </TextTitle>

                        <IconContainer>
                            {student.courses.map((item) => <LenguageIcons src={item.lenguageFlag} />)}
                            <AddIcon className={"fa-solid fa-circle-plus"} />
                        </IconContainer>

                        <HomeClassCard content={classContent[0]}/>
                    </TextBody>


                <CourseFeeContainer>
                    <PaymentFeeSection />
                </CourseFeeContainer>

                </StudentInfoDescription>
            </ContentContainer>
        </ContentArea>
    </>

    );
}

export default StudentInfo;