import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./StudentCardStyle";
import { useState, useEffect } from "react";

import DeleteButton from "../components/DeleteButton";
import { StudentData } from "../models/Student";
import { AxiosStudentRequest } from "../axios";
import { LanguageData } from "../models/Language";
import Loading from "../pages/Loading";

type StudentDataProps = {
  student: StudentData;
};

function StudentCard({ student }: StudentDataProps) {

    const [foundLanguages, setLanguages] = useState<LanguageData[]>([]);
    const [emptyLanguages, setEmptyLanguages] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const studentAxiosRequest = new AxiosStudentRequest();
        const foundLanguagesRequest: LanguageData[] = await studentAxiosRequest.getStudentLanguagesRequest(student);
        setLanguages(foundLanguagesRequest);
        setEmptyLanguages(false);
      };
      fetchData();
    });


  return (
    <>
      <ContentContainer href={`/student/${student.id}`}>
        <StudentPic src={`/assets/images/${student.picture}`} />
        <InfoContainer>
          <StudentName>{student.name}</StudentName>

          {emptyLanguages == true ? <Loading /> : <LenguageIconContainer> {foundLanguages.map((item: LanguageData) => <CourseIcon src={`/assets/images/${item.roundFlagIcon}`} />)} </LenguageIconContainer>}
      
        </InfoContainer>

        <ButtonSection>
          <DeleteButton />
        </ButtonSection>
      </ContentContainer>
    </>
  );
}

export default StudentCard;