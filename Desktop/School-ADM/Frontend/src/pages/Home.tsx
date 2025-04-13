import { useEffect, useState } from "react";
import { AxiosClassRequest } from "../axios";
import HomeClassCard from "../layouts/HomeClassCard";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer, IconBar, HomeTitle, Icon, ClassCardArea } from "./HomeStyle";
import { ClassData } from "../models/ClassGroup";
import Loading from "./Loadding";
    
function Home(){
    const headIcons = ["fab fa-instagram", "fab fa-facebook", "fab fa-whatsapp", "fas fa-envelope", "fas fa-globe", "fas fa-user-circle"];

    const [todayClasses, setTodayClasses] = useState<ClassData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() =>{
        const fetchData = async () =>{
            const axiosClassRequest = new AxiosClassRequest();
            const foundTodayClasses: ClassData[] = await axiosClassRequest.getTodayClasses();
            setTodayClasses(foundTodayClasses);
            setLoading(false);
        }
        fetchData();
    }, []);

    if(loading){
        return <Loading />
    }

    console.log(todayClasses);

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
                    {todayClasses.length === 0 ? <Loading /> : (todayClasses.map((item: ClassData) => <HomeClassCard classContent = {item} />)) }
                </ClassCardArea>

            </ContentContainer>
        </ContentArea>      
    </>   
);}

export default Home;