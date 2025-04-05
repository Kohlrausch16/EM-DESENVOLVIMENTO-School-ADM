import { PageBody, ButtonContainer } from "./StudentStyle";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import LateralMenu from "../layouts/LateralMenu";
import { ContentArea } from "./FlexController";
import { ContentContainer } from "./HomeStyle";
import StudentCard from "../layouts/StudentCard";

import { AxiosStudentRequest } from "../axios";
import { StudentData } from "../models/StudentModel";

async function Students(){

    const axiosStudentRequest = new AxiosStudentRequest();

    const title = 'aluno';
    const studentsData: StudentData[] = await axiosStudentRequest.getStudents();
 
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
                    {studentsData.map((item: StudentData) => <StudentCard student={item} />)}
                </PageBody>
                
            </ContentContainer>
        </ContentArea>
    </>
    
);}

export default Students;