import axios from "axios";
import { formToJSON } from "axios";
import { contains } from "class-validator";
import { StudentData } from "./models/Student";
import { ClassData } from "./models/ClassGroup";

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
}

export class AxiosClassRequest {
  async getClasses(): Promise<ClassData[]> {
    const classList = await axios.get<ClassData[]>(`${apiKey}/class`);
    return classList.data;
  }
}

export const getCourses = await axios.get(`${apiKey}/course`);

export const getLanguages = await axios.get(`${apiKey}/language`);

export const getTeachers = await axios.get(`${apiKey}/teacher`);
