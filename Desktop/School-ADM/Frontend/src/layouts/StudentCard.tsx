import {
  ContentContainer,
  LenguageIconContainer,
  InfoContainer,
  StudentPic,
  StudentName,
  CourseIcon,
  ButtonSection,
} from "./StudentCardStyle";
import DeleteButton from "../components/DeleteButton";
import { StudentData } from "../models/Student";

type StudentDataProps = {
  student: StudentData;
};

function StudentCard({ student }: StudentDataProps) {
  return (
    <>
      <ContentContainer href={`/student/${student.id}`}>
        <StudentPic src={student.picture} />
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
