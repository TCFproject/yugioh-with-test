import React from 'react';
import { styled } from "styled-components";
import type {Card} from "../../type/CardType";

interface PrintCard{
    prop: Card;
}
export const CardData: React.FC<PrintCard> = ({prop}) => {
    return <>
        <img src='' alt='CardImg'/>
        <DataSide data-testid="cardData">
            <div data-testid='cardName'>
                {prop.name}
            </div>
            <div data-testid='cardCaract'>

            </div>
            <div data-testid='cardEffect'>
                {prop.desc}
            </div>
        </DataSide>
    </>
}

const TestStyle = styled.div`
    border-style: solid;
`
const DataSide = styled(TestStyle)`
    display: flex;
    flex-direction: column;
`
const Card = styled(TestStyle)`
    
`
