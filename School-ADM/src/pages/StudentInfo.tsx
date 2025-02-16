import { IconContainer, TextTitle, LenguageIcons, DescriptionTitle, StudentInfoContainer, CourseFeeContainer, CourseFee, CourseTotalFee, AddIcon, TextBody, InfoSection, Header, ButtonContainer, ContentArea, ContentContainer, StudentPicture, StudentInfoDescription, Line, StudentName, StudentInformation } from "./StudentInfoStyle";
import { useParams } from "react-router-dom";
import { studentsTest } from "../axios"; 
import LateralMenu from "../layouts/LateralMenu";
import DeleteButton from "../components/DeleteButton";
import SaveButton from "../components/SaveButton";
import HomeClassCard from "../layouts/HomeClassCard";

import { classContent } from "../axios";

function StudentInfo(){

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

    const {id} = useParams();

    const student: StudentDataProps = studentsTest.find((item) => {
        return item.id === id;
    });

    return(
    <>        
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <StudentInfoDescription>
                    <StudentPicture src={student.picture} />
                    <Line />
                        <Header>
                            <StudentInfoContainer>
                                <StudentName type='text' defaultValue={student.name} />
                                <InfoSection>
                                    <DescriptionTitle> Idade </DescriptionTitle>
                                    <StudentInformation type='text' defaultValue={student.age} />
                                </InfoSection>
                                <InfoSection>
                                    <DescriptionTitle> Número </DescriptionTitle>
                                    <StudentInformation type='text' defaultValue={student.phone} />
                                </InfoSection>
                            </StudentInfoContainer>
                            
                            <ButtonContainer>
                                <SaveButton />
                                <DeleteButton />
                            </ButtonContainer>
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
                            teste 1515
                            </CourseFee>
                        
                            <CourseFee>
                                teste 1515
                            </CourseFee>
                            
                            <CourseTotalFee>
                            teste 1515   
                            </CourseTotalFee>
                            
                        </CourseFeeContainer>

                </StudentInfoDescription>
            </ContentContainer>
        </ContentArea>
    </>

    );
}

export default StudentInfo;