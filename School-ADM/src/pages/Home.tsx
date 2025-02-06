import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer, IconBar, Icon, ClassCardArea } from "./HomeStyle";
//import student from '../assets/images/students.png';

function Home(){

    const headIcons = ["fab fa-instagram", "fab fa-facebook", "fab fa-whatsapp", "fab fa-envelope", "fab fa-globe", "fab fa-user"]



    return(
    <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <IconBar>

                {headIcons.map((item) => 
                    <Icon className={item} />
                )}
                    
                </IconBar>
                <ClassCardArea >

                </ClassCardArea>

            </ContentContainer>
        </ContentArea>
       
    </>
    
);}

export default Home;

/*

    
    <MenuIcons />
    <ClassCard />
    
    */