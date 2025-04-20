import { useState, useEffect } from "react";
import { PageBody, ButtonContainer } from "./TeachersStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import TeacherCard from "../layouts/TeacherCard";
import Loading from "./Loading";
import { AxiosTeacherRequest } from "../axios";
import { TeacherData } from "../models/Teacher";

function Teachers(){

    const title = 'professor';

    const [teacherData, setTeacherData] = useState<TeacherData[]>();
    const[loading, setLoading] = useState<boolean>(true);

    useEffect(() =>{
        const fetchData = async () =>{
            const axiosTeacherRequest = new AxiosTeacherRequest();
            const foundTeachers: TeacherData[] = await axiosTeacherRequest.getTeachers();

            setTeacherData(foundTeachers);
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
                    {teacherData?.map((item: TeacherData) =>
                        <TeacherCard teacherContent={item} />
                    )}
                </PageBody>
                
            </ContentContainer>
        </ContentArea>
    </>
);}

export default Teachers;