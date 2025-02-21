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

function TeacherCard({teacher}: TeacherDataProps[]){

    return(
        <>
            {teacher.map((item: TeacherDataProps) =>
                <ContentContainer href={`/teacher/${item.id}`}> 
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


export default TeacherCard;