import { DescriptionTitle, InfoSection, StudentName, StudentInformation } from "./StudentInfoSectionStyle";

type student = {
    name: string;
    age: string;
    phone: string;
}

type StudentData = {
    studentInfo: student;
}

function StudentInfoSection({studentInfo}: StudentData){
    return(
        <>
            <StudentName type='text' defaultValue={studentInfo.name} />
            <InfoSection>
                <DescriptionTitle> Idade </DescriptionTitle>
                <StudentInformation type='text' defaultValue={studentInfo.age} />
            </InfoSection>
            <InfoSection>
                <DescriptionTitle> Número </DescriptionTitle>
                <StudentInformation type='text' defaultValue={studentInfo.phone} />
            </InfoSection>
        </>
    );

}

export default StudentInfoSection;