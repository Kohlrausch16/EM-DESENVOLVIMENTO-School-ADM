import { ButtonContainer, ButtonBody, ButtonIcon } from './EditButtonStyle';

function EditButton(){

    return(
        <>
            <ButtonContainer>
                <ButtonBody>
                    <ButtonIcon className="fa-solid fa-pen-to-square" />
                </ButtonBody>
            </ButtonContainer>
        </>
    );
}

export default EditButton;