import style from "styled-components";
import image from "/assets/images/background.png";

const colors =  [ "#FFD1DC", "#FFECB3", "#C8E6C9", "#B3E5FC", "#E1BEE7", "#FFF9C4", "#F8BBD0", "#D1C4E9", "#B2EBF2", "#DCEDC8"];

export const ContentArea = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    height: 100dvh;
    background-image: linear-gradient(to bottom right, ${colors[Math.floor(Math.random() * 9)]}, ${colors[Math.floor(Math.random() * 9)]});    
`;

export const BackgroundImage = style.div`
    flex: 1;
    width: 100%;
    height: 100%;
    background-image: url(${image});
`;

export const FlexContainer = style.div`
    display: flex;
    width: 90%;
    height: 80%;
    justify-content: center;
    align-items: center;

    @media(min-width: 768px){
        width: 80%;
        height: 90%;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 913px){
        width: 35%;
        height: 80%;
        padding-right: 50%;
        justify-content: center;
        align-items: center;
    }
`;
