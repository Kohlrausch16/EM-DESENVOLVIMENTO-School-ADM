import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./TeacherCardStyle";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

type lenguageIcon = string;

type TeacherDataProps = {
    id: string;
    picture: string;
    first_name: string;
    last_name: string;
    lenguages: lenguageIcon[];
    
}

function TeacherCard({teacher}: TeacherDataProps){

    return(
        <>
            <ContentContainer href={`/teacher/${teacher.id}`}> 
                <StudentPic src={teacher.picture} />
                    <InfoContainer>
                    <StudentName>
                        {teacher.first_name}  {teacher.last_name}
                    </StudentName>

                    <LenguageIconContainer>

                    {teacher.lenguages.map((contentIcon) => 
                        <CourseIcon src={contentIcon.lenguageIcon} />
                    )}

                    </LenguageIconContainer> 

                </InfoContainer>
                <ButtonSection>
                        <EditButton />
                        <DeleteButton />
                    </ButtonSection>
            </ContentContainer>
        </>
    );
}


export default TeacherCard;