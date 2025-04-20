import axios from "axios";
import { StudentData } from "./models/Student";
import { ClassData } from "./models/ClassGroup";
import { CourseData } from "./models/Course";
import { LanguageData } from "./models/Language";
import { TeacherData } from "./models/Teacher";
import { CourseLevelData } from "./models/CourseLevel";


const apiKey: string = "http://localhost:8080";

export const login = [
  {
    email: "teste@gmail.com",
    password: "password",
  },
  {
    email: "admin@gmail.com",
    password: "password",
  },
  {
    email: "user@gmail.com",
    password: "password",
  },
];


export class AxiosStudentRequest {
  async getStudents(): Promise<StudentData[]> {
    const studentList = await axios.get<StudentData[]>(`${apiKey}/student`);
    return studentList.data;
  }

  async getStudent(id: string): Promise<StudentData> {
    const foundStudent = await axios.get<StudentData>(`${apiKey}/student/${id}`);
    return foundStudent.data;
  }

  async getStudentLanguagesRequest(student: StudentData): Promise<LanguageData[]>{
    const axiosClassRequest = new AxiosClassRequest();
    const axiosCourseRequest = new AxiosCourseRequest();
    const axiosLanguageRequest = new AxiosLanguageRequest();

    const languages: LanguageData[] = [];
    
    for(const item of student.classGroupList){
      const foundClass: ClassData = await axiosClassRequest.getClass(item);
      const foundCourse: CourseData = await axiosCourseRequest.getCourse(foundClass.course);
      const foundLanguage: LanguageData = await axiosLanguageRequest.getLanguage(foundCourse.language);
      languages.push(foundLanguage);
    }

    return languages;
  }
}


export class AxiosClassRequest {
  async getClasses(): Promise<ClassData[]> {
    const classList = await axios.get<ClassData[]>(`${apiKey}/class`);

    classList.data.map((item: ClassData) =>{
    
      switch(item.weekDay){
          case 'SEGUNDA_FEIRA':
            item.weekDay = 'Segunda-Feira';
            break 
          
          case 'TERCA_FEIRA':
            item.weekDay = 'Terça-Feira';
            break 

          case 'QUARTA_FEIRA':
            item.weekDay = 'Quarta-Feira';
            break 

          case 'QUINTA_FEIRA':
            item.weekDay = 'Quinta-Feira';
            break 

          case 'SEXTA_FEIRA':
            item.weekDay = 'Sexta-Feira';
            break 

          case 'SABADO':
            item.weekDay = 'Sábado';
            break 
      }
    });
    return classList.data;
  }

  async getClass(id: string): Promise<ClassData> {
    const foundClass = await axios.get<ClassData>(`${apiKey}/class/${id}`);
    return foundClass.data;
  }

  async getTodayClasses(): Promise<ClassData[]> {
    const classList: ClassData[] = await this.getClasses(); 

    const weekDays = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  
    const days = new Date();
    const today = days.getDay();

    const todayClasses: ClassData[] = classList.filter((item: ClassData) =>{
        return item.weekDay === weekDays[today + 1];
    });

    return todayClasses;
  }
}



export class AxiosCourseRequest{

  async getCourses(): Promise<CourseData[]>{
    const courseList = await axios.get<CourseData[]>(`${apiKey}/course`);
    return courseList.data;
  }

  async getCourse(id: string): Promise<CourseData>{
    const foundCourse = await axios.get<CourseData>(`${apiKey}/course/${id}`);
    return foundCourse.data;
  }

}


export class AxiosLanguageRequest{
  async getLanguages(): Promise<LanguageData[]>{
    const languageList = await axios.get<LanguageData[]>(`${apiKey}/language`);
    return languageList.data;
  }

  async getLanguage(id: string): Promise<LanguageData>{
    const foundLanguage = await axios.get<LanguageData>(`${apiKey}/language/${id}`);
    return foundLanguage.data;
  }

}

export class AxiosTeacherRequest{
  async getTeachers(): Promise<TeacherData[]>{
    const teacherList = await axios.get<TeacherData[]>(`${apiKey}/teacher`);
    return teacherList.data;
  }

  async getTeacher(id: string): Promise<TeacherData>{
    const foundTeacher = await axios.get<TeacherData>(`${apiKey}/teacher/${id}`);
    return foundTeacher.data;
  }

}

export class AxiosCourseLevelRequest{
  async getCourseLevels(): Promise<CourseLevelData[]>{
    const courseLevelList = await axios.get<CourseLevelData[]>(`${apiKey}/level`);
    return courseLevelList.data;
  }

  async getCourseLevel(id: string): Promise<CourseLevelData>{
    const foundCourseLevel = await axios.get<CourseLevelData>(`${apiKey}/level/${id}`);
    return foundCourseLevel.data;
  }

}