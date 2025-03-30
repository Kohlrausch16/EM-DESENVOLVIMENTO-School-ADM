import HomeClassCard from "../layouts/HomeClassCard";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer, IconBar, HomeTitle, Icon, ClassCardArea } from "./HomeStyle";
    
function Home(){
    
    const headIcons = ["fab fa-instagram", "fab fa-facebook", "fab fa-whatsapp", "fas fa-envelope", "fas fa-globe", "fas fa-user-circle"];
    /*const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado' ];

    const days = new Date();
    const today = days.getDay();

    console.log(today)
    const classes = classContent.filter((item) =>{
        return item.classInfo[0].content === weekDays[today - 1];
    });*/

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

                    {classContent.map((item) =>
                        <HomeClassCard content={item} />
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