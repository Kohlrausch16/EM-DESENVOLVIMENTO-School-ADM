import style from "styled-components";
import image from "/assets/images/background.png";

export const ContentArea = style.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const BackgroundImage = style.div`
    flex: 1;
    width: 100%;
    height: 100%;
    background-image: url(${image});
`;

export const FlexContainer = style.div`
    display: flex;
    width: 40%;
    height: 100%;
    flex: 1;
    padding-left: 8%;
    padding-right: 50%;
    justify-content: center;
    align-items: center;
`;
