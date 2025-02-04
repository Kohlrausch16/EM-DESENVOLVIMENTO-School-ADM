import style from "styled-components";
import image from "../assets/images/4A90E2.png";

export const ContentArea = style.div`
    display: flex;
    width: 100%;
    background-image: url(${image});
    overflow: hidden;
`;

export const FlexContainer = style.div`
    display: flex;
    width: 60%;
    height: 100%;
    flex: 1;
    padding-left: 8%;
    margin: 3.65% 0%;
    padding-right: 50%;
    justify-content: center;
    align-items: center;
`;
