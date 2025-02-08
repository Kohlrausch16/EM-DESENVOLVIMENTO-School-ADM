import style from 'styled-components';


export const ClassCard = style.div`
    display: flex;
    width: 48%;
    height: 40%;
    margin-bottom: 5%;
    border: solid 2px #DEDEDE;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover{
        cursor pointer;
        transform: translate(0, -5%);
    }
`;

export const LenguageFlag = style.img`
    width: 15%;
    border-right: solid 2px #DEDEDE;
`;

export const ClassName = style.div`
    display: flex;
    flex-warp: warp;
    font-family: verdana;
    font-size: 140%;
    padding: 3%;
    color: #333333;
`;

export const CourseLevel = style.div`
    font-family: verdana;
    margin-left: auto;
    height: 60%;
    border-bottom-left-radius: 15px;
    font-size: 120%;
    padding: 3%;
    color: #333333;
    background-color: #DEDEDE;
`;

export const CardInfo = style.div`
    display: flex;
`;

export const Information = style.div`
    display: flex;
    width: 50%;    
    gap: 5%;
`;

export const ItemIcon = style.i`
    display: flex;
    align-self: center;
`;

export const TextContent = style.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 2%;
`;

export const ItemDescription = style.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: center;
    font-style: italic;
`;

export const CardRow = style.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
`;