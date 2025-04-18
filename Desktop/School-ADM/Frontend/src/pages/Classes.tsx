import { useState, useEffect } from "react";

import { PageBody, ButtonContainer } from "./ClassesStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import ClassCard from "../layouts/ClassCard";
import Loading from "./Loading";
import { ClassData } from "../models/ClassGroup";
import { AxiosClassRequest } from "../axios";

function Classes(){

    const title = 'turma';
    const [foundClass, setFoundClass] = useState<ClassData[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () =>{
            const axiosClassRequest = new AxiosClassRequest();
            const foundClasses: ClassData[] = await axiosClassRequest.getClasses();

            setFoundClass(foundClasses);
            setLoading(false);
        }
        fetchData();
    });

    if(loading){
        return <Loading />
    }

    return(
    <>
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <SearchBar title={title} />
                <ButtonContainer>
                    <AddButton />
                </ButtonContainer>
                <PageBody> 
                    {foundClass?.map((item: ClassData) => 
                        <ClassCard classContent={item} />
                    )}
                    
                </PageBody>
            </ContentContainer>
        </ContentArea>
    </>
    
);}

export default Classes;