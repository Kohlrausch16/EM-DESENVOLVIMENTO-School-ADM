import { PageBody } from "./StudentStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";


import StudentCard from "../layouts/StudentCard";

function Students(){

    const title = 'aluno';
    return(
    <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <SearchBar title={title} />
                <AddButton />
                <PageBody>
                    <StudentCard />
                </PageBody>
            </ContentContainer>
        </ContentArea>
       
    </>
    
);}

export default Students;