import { ContentContainer, SearchField, SearchIcon, IconContainer } from "./SearchBarStyle";

type TitleProps = {
    title: string;
};


function SearchBar({title}: TitleProps){

    return(
        <>

            <ContentContainer>
                <SearchField type='text' placeholder={`Buscar ${title}`} />
                <IconContainer>
                    <SearchIcon className='fab fa-search'/>
                </IconContainer>  
            </ContentContainer>
        </>
    );

}

export default SearchBar