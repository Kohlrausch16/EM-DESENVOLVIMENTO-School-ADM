import style from "styled-components";

export const ContentArea = style.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const ContentContainer = style.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #FFFEFE;
    padding: 3% 1%;
    justify-content: center;
    align-items: center;
`;


export const StudentInfoDescription = style.div`
    display: flex;
    width: 80%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: scroll;
`;

export const Header = style.div`
    display: flex;
    width: 98%;
    height: 25%;
    margin-top: -9%;
    padding: 2% 0% 0% 2%;
`;

export const StudentInfoContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: end;
    height: 100%;
    gap: 1%;
`;

export const TextBody = style.div`
    display: flex;
    flex-direction: column;
    width: 96%;
    height: 50%;
    margin-bottom: 2%;
    justify-content: start;
    padding: 0% 2%;
`;

export const TextTitle = style.h1`
    font-family: verdana;
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
`;

export const LenguageIcons = style.img`
   width: 5.6%;
    height: 100%;
    border-radius: 50%;
    border: solid 1px  #DEDEDE;

    transition: transform 0.2s;

    &:hover{
        cursor: pointer;
        transform: translate(0, -5%);
    }
`;

export const AddIcon = style.i`
    font-size: 240%;
    color: #333333;
    transition: transform 0.2s;

    &:hover{
        color: #958D8D;
        cursor pointer;
        transform: translate(0, -5%);
    }
`;

export const CourseFeeContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    padding: 2% 0%;
    color: #333333;
    font-size: 100%;
    font-weight: light;
    font-family: verdana;
    border-top: solid 1px  #DEDEDE;
`;