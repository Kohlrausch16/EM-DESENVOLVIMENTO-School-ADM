import { useState, useEffect } from "react";

import { ClassCard, LenguageFlag, ClassName, CourseLevel, CardRow, Information, TextContent, ItemIcon, Link, ItemDescription, CardInfo } from "./HomeClassCardStyle";
import { AxiosCourseRequest, AxiosLanguageRequest, AxiosTeacherRequest} from "../axios";

import { CourseData } from "../models/Course";
import { ClassData } from "../models/ClassGroup";
import { TeacherData } from "../models/Teacher";
import { LanguageData } from "../models/Language";
import Loading from "../pages/Loading";

type HomeCardContentProps = {
    classContent: ClassData;
}

function HomeClassCard({classContent}: HomeCardContentProps){

    const axiosCourseRequest = new AxiosCourseRequest();
    const axiosLanguageRequest = new AxiosLanguageRequest();
    const axiosTeacherRequest = new AxiosTeacherRequest();

    const [language, setLanguage] = useState<LanguageData>();
    const [teacher, setTeacher] = useState<TeacherData>();


    const [loading, setLoading] = useState<boolean>(true);

    const cardIcons = ["fas fa-calendar-alt", "fas fa-clock", "fas fa-chalkboard-teacher", "fas fa-users"];

    useEffect(() =>{
        const fetchData = async () =>{

            const foundCourse: CourseData = await axiosCourseRequest.getCourse(classContent.course); 
            const foundLanguage: LanguageData = await axiosLanguageRequest.getLanguage(foundCourse.language); 
            const foundTeacher: TeacherData = await axiosTeacherRequest.getTeacher(classContent.teacher);
            
            setLanguage(foundLanguage);
            setTeacher(foundTeacher);
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
                <ClassCard>
                    <LenguageFlag src={`assets/images/${language?.flagIcon}`} />
                    <CardRow>
                        <CardInfo>
                            <ClassName> {classContent.name}</ClassName>
                            <CourseLevel> {classContent.courseLevel} </CourseLevel>
                        </CardInfo>

                        <TextContent>
                            <Information>
                                <ItemIcon className={cardIcons[0]} />
                                <ItemDescription> {classContent.weekDay}</ItemDescription>
                            </Information>

                            <Information>
                                <ItemIcon className={cardIcons[1]} />
                                <ItemDescription> {`${classContent.dayHour[0]}:${classContent.dayHour[1]}`}</ItemDescription>
                            </Information>

                            <Information>
                                <ItemIcon className={cardIcons[2]} />
                                <ItemDescription> {teacher?.name}</ItemDescription>
                            </Information>

                            <Information>
                                <ItemIcon className={cardIcons[3]} />
                                <ItemDescription> {classContent.classroom}</ItemDescription>
                            </Information>

                        </TextContent>
                    </CardRow>
                </ClassCard>
            </Link>
        </>
    );
}

export default HomeClassCard;