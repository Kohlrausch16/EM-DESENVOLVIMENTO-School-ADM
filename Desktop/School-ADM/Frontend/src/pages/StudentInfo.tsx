import { useState, useEffect } from "react";
import { IconContainer, TextTitle, LenguageIcons, StudentInfoContainer, EmptyDiv, CourseFeeContainer, AddIcon, TextBody, Header, ContentArea, ContentContainer, StudentInfoDescription } from "./StudentInfoStyle";
import { useParams } from "react-router-dom";
import LateralMenu from "../layouts/LateralMenu";

import Loading from "./Loadding";

import PictureSection from "../components/PictureSection";
import StudentInfoSection from "../components/StudentInfoSection";
import ButtonContainer from "../components/ButtonContainer";
import PaymentFeeSection from "../components/PaymentFeeSection";
import CourseCard from "../layouts/CourseCard";
import { AxiosStudentRequest, AxiosClassRequest, AxiosCourseRequest, AxiosLanguageRequest } from "../axios";
import { StudentData } from "../models/Student";
import { ClassData } from "../models/ClassGroup";
import { CourseData } from "../models/Course";
import { LanguageData } from "../models/Language";


function StudentInfo(){

    const {id} = useParams();

    const axiosStudentRequest = new AxiosStudentRequest();
    const axiosClassRequest = new AxiosClassRequest();
    const axiosCourseRequest = new AxiosCourseRequest();
    const axiosLanguageRequest = new AxiosLanguageRequest();

      const [studentData, setStudentData] = useState<StudentData>();
      const classList: ClassData[] = [];


      const [loading, setLoading] = useState<boolean>(true);

    
      useEffect(() => {
        const fetchData = async () => {
          const student: StudentData = await axiosStudentRequest.getStudent(id as string);

          student.classGroupList.map((item: string) => {
            const foundClass: ClassData = await axiosClassRequest.getClass(item);
            classList.push(foundClass);
          });

          
          const student: StudentData = await axiosStudentRequest.getStudent(id as string);
          const student: StudentData = await axiosStudentRequest.getStudent(id as string);

          setStudentData(student);
          setLoading(false);
        };
    
        fetchData();
      }, []);
    
      if(loading){
        return <Loading />
      }


    






    const [index, changeCard] = useState('');

    return(
    <>     
        <ContentArea>
            <LateralMenu />
            <ContentContainer>
                <StudentInfoDescription>
                    <PictureSection picture={student.picture} />       
                    <Header>
                        <StudentInfoContainer>
                            <StudentInfoSection studentInfo={student} />
                        </StudentInfoContainer>
                        <ButtonContainer />
                    </Header>

                    <TextBody>
                        <TextTitle> TURMAS </TextTitle>
                        <IconContainer>

                            {student?.courses.map((item) => <LenguageIcons src={item.lenguageFlag} 
                            onClick={() => changeCard(item.id)}/>)}

                            <AddIcon className={"fa-solid fa-circle-plus"} />
                        </IconContainer>

                        {index !== '' ? (<CourseCard content={index} />) : (<EmptyDiv> Selecione um ícone para vizualizar </EmptyDiv>)}

                    </TextBody>

                <CourseFeeContainer>

                    <PaymentFeeSection fees={student?.courses} />
                </CourseFeeContainer>

                </StudentInfoDescription>
            </ContentContainer>
        </ContentArea>
    </>
    
    );
}

export default StudentInfo;