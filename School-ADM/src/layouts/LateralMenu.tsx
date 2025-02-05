import { MenuBody, LogoContainer, MenuLogo, ItemBar, MenuIcon, MenuField } from "./LateralMenuStyle";
import logo from '../assets/images/logo.png';

function LateralMenu(){

    return(
        <>
            <MenuBody>
                <LogoContainer>
                    <MenuLogo src={logo} />
                </LogoContainer>

                <ItemBar>
                    <MenuIcon src={logo} />
                    <MenuField> Teste </MenuField>
                </ItemBar>
                

            </MenuBody>
        </>
    );
}

export default LateralMenu;