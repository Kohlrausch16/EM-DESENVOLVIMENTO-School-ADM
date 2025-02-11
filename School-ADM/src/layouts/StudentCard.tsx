import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./StudentCardStyle";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

import picture from '../assets/images/home.png';
import dtl from '../assets/images/deutschland_rund.png';
import frk from '../assets/images/frankreich_rund.png';
import usa from '../assets/images/usa_rund.png';
import spa from '../assets/images/spanien_rund.webp';
import itl from '../assets/images/italien_rund.webp';

type StudentDataProps = {
    id: string;
    first_name: string;
    last_name: string;
    lenguages: [
        lenguageIcon: number,
    ]
}

function StudentCard({student}: StudentDataProps[]){

    const icons = [dtl, frk, usa, spa, itl];

    return(
        <>
            {student.map((item: StudentDataProps) =>
                <ContentContainer href={`/student/${item.id}`}> 
                <StudentPic src={picture} />
                    <InfoContainer>
                    <StudentName>
                        {item.first_name}  {item.last_name}
                    </StudentName>

                    <LenguageIconContainer>

                    {item.lenguages.map((contentIcon) => 
                        <CourseIcon src={icons[contentIcon.lenguageIcon]} />
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