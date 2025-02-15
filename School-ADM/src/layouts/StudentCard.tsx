import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./StudentCardStyle";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

type lenguageIcon = string;

type StudentDataProps = {
    id: string;
    picture: string;
    name: string;
    lenguages: lenguageIcon[];
}

function StudentCard({student}: StudentDataProps[]){
    
    return(
        <>
            {student.map((item: StudentDataProps) =>
                <ContentContainer href={`/student/${item.id}`}> 
                <StudentPic src={item.picture} />
                    <InfoContainer>
                    <StudentName>
                        {item.name}
                    </StudentName>

                    <LenguageIconContainer>

                    {item.lenguages.map((contentIcon) => 
                        <CourseIcon src={contentIcon.lenguageIcon} />
                    )}

                    </LenguageIconContainer> 

                </InfoContainer>
                <ButtonSection>
                        <DeleteButton />
                    </ButtonSection>
            </ContentContainer>
            )}       
        </>
    );
}


export default StudentCard;