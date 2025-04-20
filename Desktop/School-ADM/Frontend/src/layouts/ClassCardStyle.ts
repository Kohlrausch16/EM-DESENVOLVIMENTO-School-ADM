import style from 'styled-components';

export const CardContainer = style.div`
    display: flex;
    width: 100%;
    height: 100%;
    border: solid 2px #DEDEDE;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s;

    &:hover{
        cursor: pointer;
        background-color: #FAF5F5;
        transform: translate(0, -5%);
    }
`;

export const LenguageFlag = style.img`
    width: 5%;
    border-right: solid 2px #DEDEDE;
`;

export const ClassName = style.div`
    display: flex;
    width: 100%;
    height: 40%;
    padding: 0% 3%;
    font-size: 140%;
    font-family: "Inria Sans", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #333333;
    align-items: center;
`;

export const TextContent = style.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60%;
    gap: 2%;
    padding: 0% 3%;
    justify-content: center;
    align-items: center;
`;

export const CourseLevel = style.div`
    display: flex;
    width: 9%;
    height: 45%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    font-size: 100%;
    border-bottom-left-radius: 10px;
    font-family: "Inria Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #333333;
    background-color: #DEDEDE;
`;

export const ButtonContainer = style.div`
    display: flex;
    width: 15%;
    height: 100%;
    gap: 10%;
    justify-content: center;
    align-items: center;
`;

export const ItemIcon = style.i`
    color: #333333;
`;

export const ItemDescription = style.div`
    color: #333333; 
`;

export const CardRow = style.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
`;

export const ItemContainer = style.div`
    display: flex;
    flex: 1;
    gap: 2%;
    font-family: "Inria Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
`;

export const Link = style.a`
    text-decoration: none;
    color: #333333;
    width: 99%;
    height: 20%;
    margin-bottom: 0.5%;
`;