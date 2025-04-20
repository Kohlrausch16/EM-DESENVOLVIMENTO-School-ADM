import style from 'styled-components';

export const MenuBody = style.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #333333;

    @media(min-width: 855px){
        flex: 1;
        padding-bottom: 15%;
    }
    
    @media(min-width: 913px){
        flex: 1;
        padding-bottom: 17%;
    }
`;

export const LogoContainer = style.div`
    display: flex;
    flex: 1;
    justify-content: center;
    border-bottom: solid 1px #FFFEFE;
    padding: 5% 20%;

    @media(min-width: 855px){
        padding: 5% 20%;
    }

    @media(min-width: 913px){
        padding: 5% 25%;
    }
`;

export const MenuLogo = style.img`
    width: 100px;
    cursor: pointer;

    @media(min-width: 855px){
        width: 90px;
    }

    @media(min-width: 913px){
        width: 110px;
    }

`;

export const ItemBarContainer = style.div`
    display: flex;
    flex: 6;
    flex-direction: column;

`;

export const ItemBar = style.a`
    display: flex;
    flex-direction: row;
    flex: 1;
    border-bottom: solid 1px #FFFEFE;
    text-decoration: none;

    &:hover{
        background-color: #958D8D;
    }
`;

export const MenuIcon = style.i`
    padding: 0% 2% 0% 0%;
`;

export const MenuField = style.div`
    display: flex;
    flex: 1;
    font-family: "Inria Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    justify-content: center;
    align-items: center;
    color: #FFFEFE;
    cursor: pointer;

    @media(min-width: 855px){
        padding: 0% 0% 0% 10%;
        justify-content: left;
    }

    @media(min-width: 913px){
        padding: 0% 0% 0% 10%;
       justify-content: left;
    }

`;