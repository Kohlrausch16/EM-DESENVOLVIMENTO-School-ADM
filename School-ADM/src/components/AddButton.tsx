import { ButtonContainer, ButtonBody, ButtonIcon } from './AddButtonStyle';

function AddButton(){

    return(
        <>
            <ButtonContainer>
                <ButtonBody>
                    <ButtonIcon className="fa-solid fa-plus" />
                </ButtonBody>
            </ButtonContainer>
        </>
    );
}

export default AddButton;