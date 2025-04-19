import style from "styled-components";

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

export const IconBar = style.div`
    display: flex;
    width: 55%;
    height: 5%;
    padding: 2%;
    background-color: none;
    border-bottom: solid 1px #DEDEDE;
    justify-content: space-around;
`;

export const Icon = style.i`
    color: #333333;
    font-size: 35px;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover{
        color: #958D8D;
        cursor pointer;
        transform: translate(0, -20%);
    }
`;

export const HomeTitle = style.div`
    width: 85%;
    margin: 3%;
    color: #333333;
    font-family: verdana;
    font-size: 160%;

`;

export const ClassCardArea = style.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: 100%;
    padding: 2%;
    justify-content: space-between;
    overflow: scroll;
`;
