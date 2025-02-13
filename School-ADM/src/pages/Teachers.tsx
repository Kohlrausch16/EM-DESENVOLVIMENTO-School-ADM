import { PageBody, ButtonContainer } from "./TeachersStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import TeacherCard from "../layouts/TeacherCard";
import { teacherTest } from "../axios";

function Teachers(){

    const title = 'professor';
    return(
    <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <SearchBar title={title} />
                <ButtonContainer>
                    <AddButton />
                </ButtonContainer>
                <PageBody>
                    <TeacherCard teacher={teacherTest} />
                </PageBody>
                
            </ContentContainer>
        </ContentArea>

        
       
    </>
    
);}

export default Teachers;