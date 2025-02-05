import { MenuBody, LogoContainer, MenuLogo, ItemBar, MenuIcon, MenuField } from "./LateralMenuStyle";
import logo from '../assets/images/logo.png';

function LateralMenu(){

    const test = ['HOME', 'ALUNOS', 'TURMAS', 'PROFESSORES', 'CURSOS'];

    return(
        <>
            <MenuBody>
                <LogoContainer>
                    <MenuLogo src={logo} />
                </LogoContainer>

                {test.map((item) => 

                <ItemBar>
                    <MenuIcon src={logo} />
                    <MenuField> {item}</MenuField>
                </ItemBar>
                
                )}

            </MenuBody>
        </>
    );
}

export default LateralMenu;