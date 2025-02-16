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
    height: 45%;
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
    width: 5%;
    height: 100%;
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
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    padding: 2% 0%;
    gap: 2%;
    font-size: 90%;
    font-weight: light;
    font-family: verdana;
    border-top: solid 1px  #DEDEDE;
`;


export const CourseFee = style.div`
    display: flex;
    width: 90%;
    height: 80%;
    padding: 0% 5%;
    align-items: center;
    justify-content: space-between;
`;

export const CourseTotalFee = style.div`
    display: flex;
    width: 90%;
    height: 100%;
    padding: 0% 5%;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
`;

export const FeeDescription = style.div`
`;

export const FeeValue = style.div`
    font-style: italic;
`;