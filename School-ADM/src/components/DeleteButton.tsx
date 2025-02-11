import { ButtonBody, ButtonIcon } from './DeleteButtonStyle';

function DeleteButton(){

    return(
        <>
            <ButtonBody>
                <ButtonIcon className="fa-regular fa-trash-can" />
            </ButtonBody>
        </>
    );
}

export default DeleteButton;