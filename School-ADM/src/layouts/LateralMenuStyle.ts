import style from 'styled-components';

export const MenuBody = style.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    background-color: #333333;
    align-items: center;
`;

export const LogoContainer = style.div`
    display: flex;
    height: 20%;
    width: 40%;
    padding: 10% 30%;
    justify-content: center;
    border-bottom: solid 1px #FFFEFE;
`;

export const MenuLogo = style.img`
    width: 75%;
    height: 90%;
    cursor: pointer;
`;

export const ItemBar = style.a`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 6%;
    border-bottom: solid 1px #FFFEFE;
    text-decoration: none;

    &:hover{
        background-color: #958D8D;
    }
`;

export const MenuIcon = style.img`
    display: flex;
    width: 7%;
    padding: 1% 2% 1% 18%;
    text-align: end;
    cursor: pointer;
`;

export const MenuField = style.div`
    width: 73%;
    display: flex;
    font-family: Verdana;
    justify-content: left;
    align-items: center;
    font-weight: bold;
    color: #FFFEFE;
    cursor: pointer;
`;