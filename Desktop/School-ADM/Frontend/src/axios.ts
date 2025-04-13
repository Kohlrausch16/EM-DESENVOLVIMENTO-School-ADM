import axios from "axios";
import { StudentData } from "./models/Student";
import { ClassData } from "./models/ClassGroup";
import { CourseData } from "./models/Course";
import { LanguageData } from "./models/Language";



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
    return classList.data;
  }

  async getClass(id: string): Promise<ClassData> {
    const foundClass = await axios.get<ClassData>(`${apiKey}/class/${id}`);
    return foundClass.data;
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


export const getTeachers = await axios.get(`${apiKey}/teacher`);
