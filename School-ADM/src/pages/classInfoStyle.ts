import style from 'styled-components';

export const ContentArea = style.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const ContentContainer = style.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #FFFEFE;;
    justify-content: end;
    align-items: center;
`;

export const PageBody = style.div`
    display: flex;
    flex-warp: warp;
    width: 85%;
    height: 85%;
    overflow-y: scroll;
    border-top: solid 1px #DEDEDE;
`;

export const HeaderContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 92%;
    height: 73%;
`;

export const IconContainer = style.div`
    display: flex;
    flex-direction: column;
    width: 5%;
    height: 72%;
    padding: 1% 2%;
    margin-bottom: 5%;
    gap: 1%;
`;

export const NameContainer = style.div`
    display: flex;
    align-items: center;
    width: 96%;
    height: 15%;
    padding: 0% 2%;
`;


export const ClassName = style.input`
    display: inline-block;
    width: 30%;
    padding: 2%;
    height: 15%;
    font-size: 160%;
    font-family: verdana;
    color: #333333;
    font-weight: bold;
    outline: none;
    border: none;
    box-shadow: none;
    background: none;

    &:hover{
        background-color: #FAF5F5;
        border-radius: 5px;
    }
`;

export const ActiveSwitch = style.input`
    height: 200%;
`;

export const ClassContainer = style.div`
    display: flex;
    width: 100%;
    height: 25%;
    justify-content: space-between;
    align-items: center;
    background-color: purple;
`;

export const ClassContainerSection = style.div`
    display: flex;
    flex-direction: column; 
    gap: 5%;   
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 47%;
`;

export const ClassContainerSectionTitle = style.div`
    font-family: verdana;
    color: #333333;
    font-size: 120%;
    font-weight: bold;
`;

export const ClassFlag = style.img`
    width: 13%;
    height: 43%;
    border-radius: 50%;
    border: solid 1px  #DEDEDE;

    transition: transform 0.2s;

    &:hover{
        cursor: pointer;
        transform: translate(0, -5%);
    }
`;

export const ClassLevelSection = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.5%;
    height: 44%;
    border-radius: 50%;
    font-family: verdana;
    color: #333333;
    background-color: #DEDEDE;
    font-size: 100%;
    transition: transform 0.2s;

    &:hover{
        cursor: pointer;
        background-color: #BEBEBE;
        transform: translate(0, -5%);
    }
`;

export const ClassInfoContainer = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 30%;
    background-color: yellow;
`;

export const ClassInfoSelection = style.select`

`;

export const ClassInfoSelectionOption = style.option`

`;

export const ClassInfoTime = style.input`

`;

export const ClassInfoNumber = style.input`

`;