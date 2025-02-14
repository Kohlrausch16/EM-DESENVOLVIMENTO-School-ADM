import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./StudentCardStyle";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

type lenguageIcon = string;

type StudentDataProps = {
    id: string;
    picture: string;
    first_name: string;
    last_name: string;
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
                        {item.first_name}  {item.last_name}
                    </StudentName>

                    <LenguageIconContainer>

                    {item.lenguages.map((contentIcon) => 
                        <CourseIcon src={contentIcon.lenguageIcon} />
                    )}

                    </LenguageIconContainer> 

                </InfoContainer>
                <ButtonSection>
                        <EditButton />
                        <DeleteButton />
                    </ButtonSection>
            </ContentContainer>
            )}       
        </>
    );
}


export default StudentCard;