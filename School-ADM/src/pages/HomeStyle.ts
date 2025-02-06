import style, { keyframes } from "styled-components";

/*const goUpAnimation = keyframes`
    0%{margin-top: 0%;}
    100%{margin-top: -2%;}
`;*/


export const ContentContainer = style.div`
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #FFFEFE;
    padding: 7% 5%;
    justify-content: center;
    aliing-items: center;
`;

export const IconBar = style.div`
    display: flex;
    width: 70%;
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

    &:hover{
        color: #958D8D;
        cursor pointer;
        transform: translate(0, -20%);
    }
`;

export const ClassCardArea = style.div`


`;
