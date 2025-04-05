import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./StudentCardStyle";
import DeleteButton from "../components/DeleteButton";



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