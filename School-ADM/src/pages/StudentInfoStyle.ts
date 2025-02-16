import style from "styled-components";

export const ContentArea = style.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const ContentContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 56%;
    height: 100%;
    padding: 5% 7%;
    justify-content: center;
    background-color: #FFFEFE;
`;

export const StudentInfoDescription = style.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    height: 100%;
    background-color: red;
    overflow: scroll;
`;

export const StudentPicture = style.img`
    width: 15.7%;
    height: 20%;
    border-radius: 50%;
    border: solid 2px  #DEDEDE;

    &:hover{
        cursor: pointer;
    }
`;

export const Line = style.hr`
    display: flex;
    width: 84.3%;
    height: 10%;
    margin-left: auto;
    margin: -16% 0% 0% 16%;
    background-color: none;
    border: none;
    border-bottom: solid 1px  #DEDEDE;
`;

export const Header = style.div`
    display: flex;
    width: 98%;
    height: 35%;
    padding: 2% 0% 0% 2%;
`;

export const StudentInfoContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: end;
    height: 100%;
    gap: 1%;
`;

export const ButtonContainer = style.div`
    display: flex;
    width: 9%;
    height: 100%;
    padding: 0% 1% 0% 0%;
    flex-direction: column;
    align-items: end;
    gap: 5%;
`;

export const InfoSection = style.div`
    display: flex;
    width: 100;
    height: 20%;
    align-items: center;
`;

export const StudentName = style.input`
    display: flex;
    width: 70%;
    height: 25%;
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

export const TextBody = style.div`
    display: flex;
    flex-direction: column;
    width: 96%;
    height: 40%;
    padding: 1% 2%;
    background-color: blue;
`;

export const TextTitle = style.h1`
    font: verdana;
    color: #333333;
    font-size: 150%;
`;

export const IconContainer = style.div`
    display: flex;
    width: 95%;
    height: 12%;
    margin-top: -2%;
    margin-bottom: 5%;
    padding: 1% 2%;
    gap: 1%;
    background-color: yellow;
`;

export const LenguageIcons = style.img`
    width: 5%;
    height: 90%;
    border-radius: 50%;
    border: solid 2px  #DEDEDE;

    &:hover{
        cursor: pointer;
    }
`;

export const AddIcon = style.i`
    font-size: 240%;
    color: #333333;

    &:hover{
        color: #958D8D;
        cursor: pointer;
    }
`;

export const CourseFeeContainer = style.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: green;
    gap: 5%;
    border-top: solid 1px  #DEDEDE;
`;


export const CourseFee = style.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: blue;
`;

export const CourseTotalFee = style.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: bold;
`;
