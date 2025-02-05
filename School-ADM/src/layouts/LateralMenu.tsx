import { MenuBody, LogoContainer, MenuLogo, ItemBar, MenuIcon, MenuField } from "./LateralMenuStyle";
import img from '../assets/images/logo.png'

function LateralMenu(){
    return(
        <>
            <MenuBody>
                <LogoContainer>
                    <MenuLogo src={img} />
                </LogoContainer>
                <ItemBar>
                    <MenuIcon />
                    <MenuField> Teste </MenuField>
                </ItemBar>
            </MenuBody>
        </>
    );
}

export default LateralMenu;