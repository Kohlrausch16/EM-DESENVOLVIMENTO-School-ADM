import { useState, useEffect } from "react";
import { CardContainer, LenguageFlag, ClassName, ItemContainer, CourseLevel, CardRow, TextContent, ItemIcon, Link, ItemDescription, ButtonContainer } from "./ClassCardStyle";

import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { ClassData } from "../models/ClassGroup";
import { AxiosCourseRequest, AxiosLanguageRequest } from "../axios";
import { CourseData } from "../models/Course";
import { LanguageData } from "../models/Language";
import Loading from "../pages/Loadding";


type ClassCardContentProps = {
    classContent: ClassData;
}

function ClassCard({classContent}: ClassCardContentProps){

    const [languageData, setLanguageData] = useState<LanguageData>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() =>{
        const fetchData = async () =>{
            const axiosCourseRequest = new AxiosCourseRequest();
            const axiosLanguageRequest = new AxiosLanguageRequest();

            const foundCourse: CourseData = await axiosCourseRequest.getCourse(classContent.course);
            const foundLanguage: LanguageData = await axiosLanguageRequest.getLanguage(foundCourse.language);

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
            <Link href={`/class/${classContent.id}`}>
                <CardContainer>
                    <LenguageFlag src={content.lenguageFlag} />
                    <CardRow>
                            <ClassName> {content.className} </ClassName>

                        <TextContent>
                            {content.classInfo.map((item) =>
                                <ItemContainer>
                                <ItemIcon className={item.icon} /> 
                                <ItemDescription> {item.content} </ItemDescription>
                            </ItemContainer>
                            )}
                        </TextContent>
                    </CardRow>

                    <ButtonContainer> 
                        <EditButton />
                        <DeleteButton />
                    </ButtonContainer>
                    
                    <CourseLevel> {content.level} </CourseLevel>
                </CardContainer>
            </Link>  
        </>

    );
}

export default ClassCard;
