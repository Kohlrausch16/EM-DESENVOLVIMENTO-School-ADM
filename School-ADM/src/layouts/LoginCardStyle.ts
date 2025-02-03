import style from 'styled-components'


export const Card = style.div`
    background-color: #FFFFFF;
    opacity: 0.75;
    border-radius: 15px;
    border: solid #DEDEDE 1px; 
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 0%;
`;

export const Logo = style.img`
    width: 25%;
    height: 25%

`;

export const CardText = style.div`
    font-family: Inria-Sans;
    font-size: 35px;
    padding: 4%;

`;

/* top | right | bottom | left */

export const TextArea = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5% 0% 1.5% 5%;
    margin: 2% 0% 2% 0%;
    width: 65%;
    border: solid #DEDEDE 1px; 
    border-radius: 50px;

`;

export const Input = style.input`
    border: none;
    flex: 1;
    width: 95%;
    font-size: 15px;
`;

export const ActionButton = style.button`

    margin: 2% 0% 0% 0%;
`;