import React from 'react';
import { styled } from "styled-components";
import type {Card} from "../../type/CardType";

interface PrintCard{
    prop: Card;
}
export const CardData: React.FC<PrintCard> = ({prop}) => {
    return <>
        <CardImg src={prop.card_images[0].image_url} data-testid='CardImg' alt='CardImg'/>
        <DataSide data-testid="cardData">
            <CardName data-testid='cardName'>
                {prop.name}
            </CardName>
            <CardCaract data-testid='cardCaract'>
                
            </CardCaract>
            <CardEffect data-testid='cardEffect'>
                {prop.desc}
            </CardEffect>
        </DataSide>
    </>
}

const CardImg = styled.img`
    width: 30vw;
    margin: 2vh;
`;
const CardName = styled.div`
    margin: 2vh;
    padding: 2vh;
    border-style: groove;
`;
const CardCaract = styled.div`
    margin: 3vh;
    height: 30vh;
`;
const CardEffect = styled.div`
    border-style: inset;
    margin: 2vh;
    height: 20vh;
`;
const TestStyle = styled.div`
    border-style: solid;
`
const DataSide = styled(TestStyle)`
    display: flex;
    flex-direction: column;
`
const Card = styled(TestStyle)`
    
`