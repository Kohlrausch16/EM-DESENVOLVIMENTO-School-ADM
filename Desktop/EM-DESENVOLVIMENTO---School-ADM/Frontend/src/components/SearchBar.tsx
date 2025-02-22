import { ContentContainer, SearchField, SearchIcon, IconContainer } from "./SearchBarStyle";

type TitleProps = {
    title: string;
};


function SearchBar({title}: TitleProps){

    return(
        <>

            <ContentContainer>
                <SearchField type='search' placeholder={`Buscar ${title}`} />
                <IconContainer>
                    <SearchIcon className='fa-solid fa-magnifying-glass'/>
                </IconContainer>  
            </ContentContainer>
        </>
    );

}

export default SearchBar