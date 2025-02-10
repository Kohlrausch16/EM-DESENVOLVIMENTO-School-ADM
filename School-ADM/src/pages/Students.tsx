import { PageBody } from "./StudentStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";


import StudentCard from "../layouts/StudentCard";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import SaveButton from "../components/SaveButton";
import FolderButton from "../components/FolderButton";
import UploadButton from "../components/UploadButton";

function Students(){

    const title = 'aluno';
    return(
    <>

<ContentArea>
            <LateralMenu />
            <ContentContainer>
                <SearchBar title={title} />
                    <AddButton />
                    <DeleteButton />
                    <EditButton />
                    <SaveButton />
                    <FolderButton />
                    <UploadButton />

                
            </ContentContainer>
        </ContentArea>

        
       
    </>
    
);}

export default Students;

/*

<PageBody>
                    <StudentCard />
                </PageBody>


*/