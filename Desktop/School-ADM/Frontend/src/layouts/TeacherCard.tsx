import { useState, useEffect } from "react";
import { ContentContainer, LenguageIconContainer, InfoContainer, TeacherPic, TeacherName, CourseIcon, ButtonSection } from "./TeacherCardStyle";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { TeacherData } from "../models/Teacher";
import { AxiosLanguageRequest } from "../axios";
import { LanguageData } from "../models/Language";
import Loading from "../pages/Loading";

type TeacherDataProps = {
    teacherContent: TeacherData;
}

function TeacherCard({teacherContent}: TeacherDataProps){

    const [languageData, setLanguageData] = useState<LanguageData>();
    const [loading, setLoading] = useState<boolean>();

    useEffect(() =>{
        const fetchData = async () =>{
            const axiosLanguageRequest = new AxiosLanguageRequest();
            const foundLanguage: LanguageData = await axiosLanguageRequest.getLanguage(teacherContent.language);

            setLanguageData(foundLanguage);
            setLoading(false);
        }
        fetchData();
    });

    if(loading){
        return <Loading />
    }

    return(
        <>
            <ContentContainer href={`/teacher/${teacherContent.id}`}> 
                <TeacherPic src={`assets/images/${teacherContent.picture}`} />
                    <InfoContainer>
                    <TeacherName> {teacherContent.name} </TeacherName>

                    <LenguageIconContainer>
                        <CourseIcon src={`assets/images/${languageData?.roundFlagIcon}`} />
                    </LenguageIconContainer> 

                </InfoContainer>
                <ButtonSection>
                        <EditButton />
                        <DeleteButton />
                    </ButtonSection>
            </ContentContainer>
        </>
    );
}


export default TeacherCard;