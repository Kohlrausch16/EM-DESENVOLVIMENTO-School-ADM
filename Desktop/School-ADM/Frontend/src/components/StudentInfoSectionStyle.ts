import style from "styled-components";

export const DescriptionTitle = style.div`
    font: verdana;
    color: #333333;
    font-size: 120%;
`;

export const StudentInformation = style.input`
    display: flex;
    width: 17%;
    height: 75%;
    margin: 0% 2%;
    font-size: 100%;
    font: verdana;
    color: #333333;
    outline: none;
    border: none;
    box-shadow: none;
    background: none;

    &:hover{
        background-color: #FAF5F5;
        border-radius: 5px;
    }
`;

export const InfoSection = style.div`
    display: flex;
    width: 100;
    height: 20%;
    padding: 0% 1%;
    align-items: center;
`;

export const StudentName = style.input`
    display: flex;
    width: 70%;
    height: 15%;
    font-size: 150%;
    font: verdana;
    color: #333333;
    font-weight: bold;
    outline: none;
    border: none;
    box-shadow: none;
    background: none;

    &:hover{
        background-color: #FAF5F5;
        border-radius: 5px;
    }
`;