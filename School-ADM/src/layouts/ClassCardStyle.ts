import style from 'styled-components';

export const CardContainer = style.div`
    display: flex;
    width: 100%;
    height: 100%;
    border: solid 2px #DEDEDE;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover{
        cursor: pointer;
        background-color: #FAF5F5;
        transform: translate(0, -5%);
    }
`;


export const LenguageFlag = style.img`
    width: 7%;
    border-right: solid 2px #DEDEDE;
`;

export const ClassName = style.div`
    display: flex;
    height: 40%;
    font-family: verdana;
    font-size: 120%;
    padding: 1% 3%;
    color: #333333;
    background-color: blue;
`;

export const CourseLevel = style.div`
    font-family: verdana;
    margin-left: auto;
    height: 5%;
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
    background-color: yellow;
`;

export const ItemIcon = style.i`
    display: flex;
    align-self: center;
`;

export const TextContent = style.div`
    display: flex;
    width: 100%;
    height: 60%;
    padding: 2%;
    background-color: red;
`;

export const ItemDescription = style.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: center;
    background-color: green;
`;

export const CardRow = style.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
`;

export const Link = style.a`
    text-decoration: none;
    color: #333333;
    width: 99%;
    height: 17%;
    margin-bottom: 0.7%;
`;