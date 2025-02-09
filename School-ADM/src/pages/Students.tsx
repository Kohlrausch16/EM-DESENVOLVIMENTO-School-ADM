import { SearchBar, SearchField, SearchIcon, PageBody, IconContainer, LenguageIconContainer, InfoContainer, StudentCard, StudentPic, StudentName, CourseIcon } from "./StudentStyle";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import dtl from '../assets/images/deutsch_rund.png';
import picture from '../assets/images/home.png';

function Students(){

    const title = 'aluno';
    const icons = [dtl, dtl];
    
    return(
    <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>

                <SearchBar title={title} />

                <PageBody>

                    <StudentCard> 
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
                    </StudentCard>
                    
                </PageBody>
            </ContentContainer>
        </ContentArea>
       
    </>
    
);}

export default Students;