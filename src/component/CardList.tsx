import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import { CardData } from './subContainer/CardData';
import useCard from '../hooks/useCard';
import {Card} from "../type/CardType";

export const CardList : React.FC<{}> = () => {
    const {cardData, cardLoading, cardError} = useCard();
    const [cardList, setCardList] = useState<Card[]>([])
    useEffect(() => {
        if (cardData) { 
            setCardList([...cardList, ...cardData])
        }
        console.log("cardList:",cardList)
    }, [cardData])
    return (<Body>
        {
            cardList.map((card, index) => {
                return(<CardPanel key={index} data-testid='cardPanel'>
                    <CardData prop={card}/>
                </CardPanel>)
            })
        }
    </Body>)
}

const Body = styled.div`
    border-style: solid;
`
const CardPanel = styled.div`
    margin: 2vh;
    height: 80vh;
    display: flex;
`