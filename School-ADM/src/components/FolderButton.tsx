import { ButtonContainer, ButtonBody, ButtonIcon } from './FolderButtonStyle';

function FolderButton(){

    return(
        <>
            <ButtonContainer>
                <ButtonBody>
                    <ButtonIcon className="fa-solid fa-folder" />
                </ButtonBody>
            </ButtonContainer>
        </>
    );
}

export default FolderButton;