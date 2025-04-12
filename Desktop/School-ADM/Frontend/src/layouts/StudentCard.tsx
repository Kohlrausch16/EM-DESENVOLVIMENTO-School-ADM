import { ContentContainer, LenguageIconContainer, InfoContainer, StudentPic, StudentName, CourseIcon, ButtonSection } from "./StudentCardStyle";
import { useState, useEffect } from "react";

import DeleteButton from "../components/DeleteButton";
import { StudentData } from "../models/Student";
import { AxiosCourseRequest } from "../axios";
import { CourseData } from "../models/Course";

type StudentDataProps = {
  student: StudentData;
};

function StudentCard({ student }: StudentDataProps) {

  const [studentsData, setCourseData] = useState<StudentData[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const axiosCourseRequest = new AxiosCourseRequest();
        const data: CourseData = await axiosCourseRequest.getCourse();
        setCourseData(data);
      };
  
      fetchData();
    }, []);

  return (
    <>
      <ContentContainer href={`/student/${student.id}`}>
        <StudentPic src={`/assets/images/${student.picture}`} />
        <InfoContainer>
          <StudentName>{student.name}</StudentName>

          <LenguageIconContainer></LenguageIconContainer>
        </InfoContainer>

        <ButtonSection>
          <DeleteButton />
        </ButtonSection>
      </ContentContainer>
    </>
  );
}

export default StudentCard;

/*

{student.classGroupList.map((contentIcon) => 
                        <CourseIcon src={contentIcon.lenguageFlag} />
                    )}
                         */
