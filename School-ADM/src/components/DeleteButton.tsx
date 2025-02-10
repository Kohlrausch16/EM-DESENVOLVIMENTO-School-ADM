import { ButtonContainer, ButtonBody, ButtonIcon } from './DeleteButtonStyle';

function DeleteButton(){

    return(
        <>
            <ButtonContainer>
                <ButtonBody>
                    <ButtonIcon className="fa-regular fa-trash-can" />
                </ButtonBody>
            </ButtonContainer>
        </>
    );
}

export default DeleteButton;