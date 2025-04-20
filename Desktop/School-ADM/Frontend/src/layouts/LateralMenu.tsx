import { MenuBody, LogoContainer, MenuLogo, ItemBar, MenuIcon, MenuField, ItemBarContainer } from "./LateralMenuStyle";
import logo from '/assets/images/logo.png';

function LateralMenu(){

    const items = [
        {
            fieldName: 'HOME',
            icon: 'fas fa-house',
            link: '/home'
        }, 
        {
            fieldName: 'ALUNOS',
            icon: 'fas fa-user-graduate',
            link: '/student'
        }, 
        {
            fieldName: 'TURMAS',
            icon: 'fas fa-users',
            link: '/class'
        }, 
        {
            fieldName: 'PROFESSORES',
            icon: 'fas fa-chalkboard-teacher',
            link: '/teacher'
        }, 
        {
            fieldName: 'CURSOS',
            icon: 'fas fa-book',
            link: '/course'
        }, 
    ];

    return(
        <MenuBody>
            <LogoContainer>
                <MenuLogo src={logo} />
            </LogoContainer>

            <ItemBarContainer>
                {items.map((item) => 
                <ItemBar href={item.link}>  
                    <MenuField> <MenuIcon className={`${item.icon}`} /> {item.fieldName}</MenuField>
                </ItemBar>
            )}
            </ItemBarContainer>
        </MenuBody>
    );
}

export default LateralMenu;