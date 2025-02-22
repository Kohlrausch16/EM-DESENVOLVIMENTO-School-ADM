import { Container } from "./ButtonContainerStule";
import DeleteButton from "./DeleteButton";
import SaveButton from "../components/SaveButton";

function ButtonContainer(){
    return(
    <>
        <Container>
            <SaveButton />
            <DeleteButton />
        </Container>
    </>

    );

}

export default ButtonContainer;