import { IconContainer, TextTitle, LenguageIcons, FeeValue, FeeDescription, StudentInfoContainer, CourseFeeContainer, CourseFee, CourseTotalFee, AddIcon, TextBody, InfoSection, Header, ContentArea, ContentContainer, StudentInfoDescription, StudentName, StudentInformation } from "./StudentInfoStyle";
import { useParams } from "react-router-dom";
import { studentsTest } from "../axios"; 
import LateralMenu from "../layouts/LateralMenu";

import HomeClassCard from "../layouts/HomeClassCard";

import { classContent } from "../axios";


import PictureSection from "../components/PhotoSection";
import StudentInfoSection from "../components/StudentInfoSection";
import ButtonContainer from "../components/ButtonContainer";

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
                    <CourseFee>
                        <FeeDescription> Total Mensalidades: </FeeDescription>
                        <FeeValue> R$55555 </FeeValue>
                    </CourseFee>
                
                    <CourseFee>
                        <FeeDescription> Total Mensalidades: </FeeDescription>
                        <FeeValue> R$55555 </FeeValue>
                    </CourseFee>
                    
                    <CourseTotalFee>
                        <FeeDescription> Total Mensalidades: </FeeDescription>
                        <FeeValue> R$55555 </FeeValue>
                    </CourseTotalFee>
                    
                </CourseFeeContainer>


                </StudentInfoDescription>
            </ContentContainer>
        </ContentArea>
    </>

    );
}

export default StudentInfo;

/*

<CourseFeeContainer>
                    <CourseFee>
                        <FeeDescription> Total Mensalidades: </FeeDescription>
                        <FeeValue> R$55555 </FeeValue>
                    </CourseFee>
                
                    <CourseFee>
                        <FeeDescription> Total Mensalidades: </FeeDescription>
                        <FeeValue> R$55555 </FeeValue>
                    </CourseFee>
                    
                    <CourseTotalFee>
                        <FeeDescription> Total Mensalidades: </FeeDescription>
                        <FeeValue> R$55555 </FeeValue>
                    </CourseTotalFee>
                    
                </CourseFeeContainer>

*/