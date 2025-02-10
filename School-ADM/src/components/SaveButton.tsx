import { ButtonContainer, ButtonBody, ButtonIcon } from './SaveButtonStyle';

function AddButton(){

    return(
        <>
            <ButtonContainer>
                <ButtonBody>
                    <ButtonIcon className="fa-solid fa-floppy-disk" />
                </ButtonBody>
            </ButtonContainer>
        </>
    );
}

export default AddButton;