import style from 'styled-components';


export const ClassCard = style.div`
    display: flex;
    width: 100%;
    height: 100%;
    border: solid 2px #DEDEDE;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.2s;

    &:hover{
        cursor pointer;
        transform: translate(0, -5%);
    }
`;

export const LenguageFlag = style.img`
    width: 7%;
    height: 100%;
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

export const CardRow = style.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding: 0% 0% 0% 2%;
    border-right: solid 1px #DEDEDE;
`;

export const PriceContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 100%;
    gap: 5%;
    justify-content: center;
    align-items: center;
    padding: 0% 1%;
`;

export const FeeSection = style.div`
    display: flex;
    justify-content: space-between;
    width: 96%;
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
`;

export const Link = style.a`
    text-decoration: none;
    color: #333333;
    width: 90%;
    height: 50%;
    align-self: center;
    margin-bottom: 5%;
`;