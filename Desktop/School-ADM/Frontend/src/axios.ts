import axios from "axios";

const apiKey: string = "localhost:8080";

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

export const getStudents = axios({
  method: 'get',
  url: `${apiKey}/student`,
});
