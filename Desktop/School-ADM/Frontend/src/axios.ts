import axios from "axios";
import { contains } from "class-validator";

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

export const getStudents = await axios.get(`${apiKey}/student`);