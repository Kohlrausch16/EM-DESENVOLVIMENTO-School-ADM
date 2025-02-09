import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon } from "./StudentCardStyle";
import picture from '../assets/images/home.png';
import dtl from '../assets/images/deutschland_rund.png';
import frk from '../assets/images/frankreich_rund.png';
import usa from '../assets/images/usa_rund.png';
import spa from '../assets/images/spanien_rund.webp';
import itl from '../assets/images/italien_rund.webp';


function StudentCard(){

    const icons = [dtl, frk, usa, spa, itl];

    return(
        <>
            <ContentContainer href={`/student`}> 
                <StudentPic src={picture} />
                <InfoContainer>
                    <StudentName>
                        Kohlrausch
                    </StudentName>

                    <LenguageIconContainer>

                    {icons.map((icon) =>    
                        <CourseIcon src={icon} />
                    )} 
                    </LenguageIconContainer> 
                </InfoContainer>
            </ContentContainer>
        </>
    );
}


export default StudentCard;

/*

${student.id} */