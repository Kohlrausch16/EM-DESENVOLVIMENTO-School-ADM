import { IconContainer, TextTitle, LenguageIcons, DescriptionTitle, StudentInfoContainer, CourseFeeContainer, CourseFee, CourseTotalFee, LineBottom, AddIcon, TextBody, InfoSection, Header, ButtonContainer, ContentArea, ContentContainer, StudentPicture, StudentInfoDescription, Line, StudentName, StudentInformation } from "./StudentInfoStyle";
import { useParams } from "react-router-dom";
import { studentsTest } from "../axios"; 
import LateralMenu from "../layouts/LateralMenu";
import img from '../assets/images/deutschland_flagge.png';
import DeleteButton from "../components/DeleteButton";
import SaveButton from "../components/SaveButton";

function StudentInfo(){

    type lenguageIcon = string;

    type StudentDataProps = {
        id: string;
        picture: string;
        name: string;
        age: string;
        phone: string;
        lenguages: lenguageIcon[];
    }

    const {id} = useParams();

    const student: StudentDataProps = studentsTest.find((item) => {
        return item.id == id;
    });

    console.log(student);

    return(
    <>        
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <StudentInfoDescription>
                    <StudentPicture src={img} />
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
                                <LenguageIcons src={img} />
                                <LenguageIcons src={img} />
                                <AddIcon className={"fa-solid fa-circle-plus"} />
                            </IconContainer>

                        </TextBody>

                </StudentInfoDescription>
            </ContentContainer>
        </ContentArea>
    </>

    );
}

export default StudentInfo;