import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./StudentCardStyle";
import DeleteButton from "../components/DeleteButton";

type courseContent = {
    id: string;
    lenguageFlag: string;
    className: string;
    level: string;
}

type StudentDataProps = {
    id: string;
    picture: string;
    name: string;
    age: string;
    phone: string;
    courses: courseContent[];
}

function StudentCard({student}: StudentDataProps[]){

    console.log(student);

    return(
        <>
            {student.map((item: any) =>
                <ContentContainer href={`/student/${item.id}`}> 
                <StudentPic src={item.picture} />
                    <InfoContainer>
                    <StudentName>
                        {item.name}
                    </StudentName>

                    <LenguageIconContainer>

                    {item.classGroupList.map((contentIcon: courseContent) => 
                        <CourseIcon src={contentIcon.lenguageFlag} />
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


/*



                    */