import { useState, useEffect } from "react";
import { PageBody, ButtonContainer } from "./StudentStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import StudentCard from "../layouts/StudentCard";

import { AxiosStudentRequest } from "../axios";
import { StudentData } from "../models/Student";
import Loading from "./Loading";

function Students() {
  const title = "aluno";
  const [studentsData, setStudentsData] = useState<StudentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const axiosStudentRequest = new AxiosStudentRequest();
      const data: StudentData[] = await axiosStudentRequest.getStudents();
      setStudentsData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ContentArea>
        <LateralMenu />
        <ContentContainer>
          <SearchBar title={title} />
          <ButtonContainer>
            <AddButton />
          </ButtonContainer>
          <PageBody>
            {studentsData.map((item: StudentData) => (
              <StudentCard student={item as StudentData} key={item.id} />
            ))}
          </PageBody>
        </ContentContainer>
      </ContentArea>
    </>
  );
}

export default Students;
