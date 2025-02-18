import { useState } from "react";
import { IconContainer, TextTitle, LenguageIcons, StudentInfoContainer, EmptyDiv, CourseFeeContainer, AddIcon, TextBody, Header, ContentArea, ContentContainer, StudentInfoDescription } from "./StudentInfoStyle";
import { useParams } from "react-router-dom";
import LateralMenu from "../layouts/LateralMenu";

import { studentsTest } from "../axios"; 

import PictureSection from "../components/PictureSection";
import StudentInfoSection from "../components/StudentInfoSection";
import ButtonContainer from "../components/ButtonContainer";
import PaymentFeeSection from "../components/PaymentFeeSection";
import CourseCard from "../layouts/CourseCard";

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

    const [index, changeCard] = useState('');

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

                            {student?.courses.map((item) => <LenguageIcons src={item.lenguageFlag} 
                            onClick={() => changeCard(item.id)}/>)}

                            <AddIcon className={"fa-solid fa-circle-plus"} />
                        </IconContainer>

                        {index !== '' ? (<CourseCard content={index} />) : (<EmptyDiv> Selecione um ícone para vizualizar </EmptyDiv>)}

                    </TextBody>

                <CourseFeeContainer>

                    <PaymentFeeSection fees={student?.courses} />
                </CourseFeeContainer>

                </StudentInfoDescription>
            </ContentContainer>
        </ContentArea>
    </>

    );
}

export default StudentInfo;