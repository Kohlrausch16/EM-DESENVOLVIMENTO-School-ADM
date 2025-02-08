import { SearchBar, SearchField, SearchIcon, IconContainer } from "./StudentStyle";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";

function Students(){

    const title = 'aluno';
    
    return(
    <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <SearchBar> 
                    <SearchField type='text' placeholder={`buscar ${title}`} />
                    <IconContainer>
                        <SearchIcon className='fab fa-instagram'/>
                    </IconContainer>  
                </SearchBar>
            </ContentContainer>
        </ContentArea>
       
    </>
    
);}

export default Students;