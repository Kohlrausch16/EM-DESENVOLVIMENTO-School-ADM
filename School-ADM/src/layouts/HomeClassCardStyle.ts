import style from 'styled-components';


export const ClassCard = style.div`
    display: flex;
    width: 48%;
    height: 40%;
    margin-bottom: 5%;
    border: solid 2px #DEDEDE;
    border-radius: 15px;
    overflow: hidden;
`;

export const LenguageFlag = style.img`
    width: 15%;
    border-right: solid 2px #DEDEDE;
`;

export const ClassName = style.div`
    font-family: verdana;
    font-size: 150%;
    padding: 3%;
    color: #333333;

`;

export const CourseLevel = style.div`
    font-family: verdana;
    align-self: right;
    height: 20%;
    border-bottom-left-radius: 15px;
    font-size: 120%;
    padding: 3%;
    color: #333333;
    background-color: #DEDEDE;
`;