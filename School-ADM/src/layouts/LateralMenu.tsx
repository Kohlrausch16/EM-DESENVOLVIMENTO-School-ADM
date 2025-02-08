import { MenuBody, LogoContainer, MenuLogo, ItemBar, MenuIcon, MenuField } from "./LateralMenuStyle";
import logo from '../assets/images/logo.png';
import home from '../assets/images/home.png';
import student from '../assets/images/students.png';
import classes from '../assets/images/classes.png';
import teacher from '../assets/images/teachers.png';
import course from '../assets/images/courses.png';


function LateralMenu(){

    const items = [
        {
            fieldName: 'HOME',
            icon: home,
            link: '/home'
        }, 
        {
            fieldName: 'ALUNOS',
            icon: student,
            link: '/student'
        }, 
        {
            fieldName: 'TURMAS',
            icon: classes,
            link: '/class'
        }, 
        {
            fieldName: 'PROFESSORES',
            icon: teacher,
            link: '/teacher'
        }, 
        {
            fieldName: 'CURSOS',
            icon: course,
            link: '/course'
        }, 
    ];

    return(
        <>
            <MenuBody>
                <LogoContainer>
                    <MenuLogo src={logo} />
                </LogoContainer>

                {items.map((item) => 

                <ItemBar href={item.link}>  
                    <MenuIcon src={item.icon} />
                    <MenuField> {item.fieldName}</MenuField>
                </ItemBar>
                
                )}

            </MenuBody>
        </>
    );
}

export default LateralMenu;