
import { PageBody, ButtonContainer } from "./TeachersStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import TeacherCard from "../layouts/TeacherCard";









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
                    {teacherTest.map((item) =>
                        <TeacherCard teacher={item} />
                    )}
                    
                </PageBody>
                
            </ContentContainer>
        </ContentArea>

        
       
    </>
    
);}

export default Teachers;