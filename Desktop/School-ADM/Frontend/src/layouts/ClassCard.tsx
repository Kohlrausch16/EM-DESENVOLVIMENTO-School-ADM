import { useState, useEffect } from "react";
import { CardContainer, LenguageFlag, ClassName, ItemContainer, CourseLevel, CardRow, TextContent, ItemIcon, Link, ItemDescription, ButtonContainer } from "./ClassCardStyle";

import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { ClassData } from "../models/ClassGroup";
import { AxiosCourseRequest, AxiosLanguageRequest, AxiosTeacherRequest } from "../axios";
import { CourseData } from "../models/Course";
import { LanguageData } from "../models/Language";
import Loading from "../pages/Loading";
import { TeacherData } from "../models/Teacher";

type ClassCardContentProps = {
    classContent: ClassData;
}

function ClassCard({classContent}: ClassCardContentProps){

    const cardIcons = ["fas fa-calendar-alt", "fas fa-clock", "fas fa-chalkboard-teacher", "fas fa-users"];

    const [languageData, setLanguageData] = useState<LanguageData>();
    const [teacherData, setTeacherData] = useState<TeacherData>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() =>{
        const fetchData = async () =>{
            const axiosCourseRequest = new AxiosCourseRequest();
            const axiosLanguageRequest = new AxiosLanguageRequest();
            const axiosTeacherRequest = new AxiosTeacherRequest();

            const foundCourse: CourseData = await axiosCourseRequest.getCourse(classContent.course);
            const foundLanguage: LanguageData = await axiosLanguageRequest.getLanguage(foundCourse.language);
            const foundTeacher: TeacherData = await axiosTeacherRequest.getTeacher(classContent.teacher);

            setLanguageData(foundLanguage);
            setTeacherData(foundTeacher);
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
                    <LenguageFlag src={`assets/images/${languageData?.flagIcon}`} />
                    <CardRow>
                            <ClassName> {classContent.name} </ClassName>

                        <TextContent>
                            <ItemContainer>
                                <ItemIcon className={cardIcons[0]} />
                                <ItemDescription> {classContent.weekDay}</ItemDescription>
                            </ItemContainer>

                            <ItemContainer>
                                <ItemIcon className={cardIcons[1]} />
                                <ItemDescription> {`${classContent.dayHour[0]}:${classContent.dayHour[1]}`}</ItemDescription>
                            </ItemContainer>

                            <ItemContainer>
                                <ItemIcon className={cardIcons[2]} />
                                <ItemDescription> {teacherData?.name}</ItemDescription>
                            </ItemContainer>

                            <ItemContainer>
                                <ItemIcon className={cardIcons[3]} />
                                <ItemDescription> {classContent.classroom}</ItemDescription>
                            </ItemContainer>
                        </TextContent>
                    </CardRow>

                    <ButtonContainer> 
                        <EditButton />
                        <DeleteButton />
                    </ButtonContainer>
                    
                    <CourseLevel> {classContent.courseLevel} </CourseLevel>
                </CardContainer>
            </Link>  
        </>

    );
}

export default ClassCard;
