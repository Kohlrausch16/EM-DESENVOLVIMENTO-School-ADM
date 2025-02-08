import { homeCardContent } from "../axios";

import HomeClassCard from "../layouts/HomeClassCard";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer, IconBar, HomeTitle, Icon, ClassCardArea } from "./HomeStyle";

function Home(){
    

    const headIcons = ["fab fa-instagram", "fab fa-facebook", "fab fa-whatsapp", "fas fa-envelope", "fas fa-globe", "fas fa-user-circle"];

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

                    {homeCardContent.map((item) =>
                        <HomeClassCard content={ item } />
                    )}   
                    

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