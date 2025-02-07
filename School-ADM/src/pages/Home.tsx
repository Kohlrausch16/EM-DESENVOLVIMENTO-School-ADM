import HomeClassCard from "../layouts/HomeClassCard";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer, IconBar, HomeTitle, Icon, ClassCardArea } from "./HomeStyle";
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

                <HomeTitle> Aulas do dia </HomeTitle>
                <ClassCardArea >

                    <HomeClassCard />

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