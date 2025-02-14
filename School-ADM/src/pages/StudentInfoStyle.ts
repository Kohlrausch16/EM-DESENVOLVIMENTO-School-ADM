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
    width: 86%;
    height: 95%;
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

export const StudentPicture = style.i`
    width: 15.7%;
    height: 22%;
    border-radius: 50%;
    border: solid 2px  #DEDEDE;
`;

export const Line = style.hr`
    display: flex;
    width: 84.3%;
    height: 10%;
    margin-left: auto;
    background-color: none;
    border: none;
    border-bottom: solid 2px  #DEDEDE;
`;



//    