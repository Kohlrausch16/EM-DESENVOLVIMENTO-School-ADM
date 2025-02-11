import { PageBody, ButtonContainer } from "./ClassesStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import StudentCard from "../layouts/StudentCard";
import { studentsTest } from "../axios";

function Classes(){

    const title = 'turma';

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
                    <StudentCard student={studentsTest} />
                </PageBody>
                
            </ContentContainer>
        </ContentArea>
        
        </>
    );

}

export default Classes;