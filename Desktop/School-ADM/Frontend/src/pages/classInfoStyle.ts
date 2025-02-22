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
    flex-wrap: wrap;
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
    width: 4%;
    height: 70%;
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
        border-radius: 2px;
    }
`;

export const ActiveSwitch = style.input`
    height: 200%;
`;

export const ClassContainer = style.div`
    display: flex;
    width: 100%;
    height: 30%;
    justify-content: space-between;
    align-items: center;
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
    height: 44%;
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
    height: 44.5%;
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
    align-self: center;
    width: 95%;
    height: 20%;
    gap: 2%;
`;

export const ClassInfoInnerContainer = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    gap: 5%;
`;

export const ClassInfoSelection = style.select`
    width: 70%;
    height: 40%;
    outline: none;
    text-align: center;
    border: none;
    background:rgba(250, 248, 248, 0.38);
    border-radius: 2px;
    font-family: verdana;
    color: #333333;
    font-size: 100%;
    font-style: italic;

    &:hover{
        background-color: #FAF5F5;
    }
`;

export const ClassInfoSelectionOption = style.option`
    width: 70%;
    height: 40%;
    outline: none;
    border: none;
    background:rgba(250, 248, 248, 0.38);
    border-radius: 2px;
    font-family: verdana;
    color: #333333;
    font-size: 100%;
    font-style: italic;

    &:hover{
        background-color: #FAF5F5;
    }
`;

export const ClassInfoTime = style.input`
    width: 40%;
    height: 40%;
    text-align: center;
    outline: none;
    border: none;
    background:rgba(250, 248, 248, 0.38);
    border-radius: 2px;
    font-family: verdana;
    color: #333333;
    font-size: 100%;
    font-style: italic;

    &:hover{
        background-color: #FAF5F5;
    }
`;

export const ClassInfoNumber = style.div`
    width: 20%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(250, 248, 248, 0.38);
    border-radius: 2px;
    font-family: verdana;
    color: #333333;
    font-size: 100%;
    font-style: italic;

    &:hover{
        background-color: #FAF5F5;
    }
`;


export const PriceColumnContainer = style.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 95%;
    height: 50%;
    gap: 2%;
`;

export const PriceRowContainer = style.div`
    display: flex;
    align-self: center;
    width: 100%;
    height: 70%;
`;

export const PriceContainerSection = style.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 3%;
    height: 100%;
`;

export const GeneralPriceFee = style.input`
    width: 40%;
    padding: 2%;
    height: 15%;
    font-size: 110%;
    font-family: verdana;
    text-align: center;
    font-style: italic;
    color: #333333;
    outline: none;
    border: none;
    background:rgba(250, 248, 248, 0.38);
    border-radius: 2px;

    &:hover{
        background-color: #FAF5F5;
        border-radius: 2px;
    }
`;


export const FinalPriceFee = style.div`
    display: flex;
    width: 30%;
    padding: 0.5%;
    height: 10%;
    justify-content: center;
    align-items: center;
    font-size: 120%;
    font-family: verdana;
    color: #333333;
    background:rgba(250, 248, 248, 0.38);
    border-radius: 2px;

    &:hover{
        background-color: #FAF5F5;
        border-radius: 2px;
    }

`;

export const FeeQuantity = style.input`
    width: 20%;
    height: 20%;
    text-align: center;
    outline: none;
    border: none;
    background:rgba(250, 248, 248, 0.38);
    border-radius: 2px;
    font-family: verdana;
    color: #333333;
    font-size: 100%;
    font-style: italic;

    &:hover{
        background-color: #FAF5F5;
        border-radius: 2px;
    }
`;

export const PersonalDataContainer = style.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: red;
    margin-top: -5%;

`;