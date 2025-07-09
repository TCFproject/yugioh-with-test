import { render, screen } from '@testing-library/react';
import {CardData} from './CardData'
import useCard from '../../hooks/useCard';

jest.mock("../../hooks/useCard")


  const mockCards = [
    { "id": 34541863,
            "name": "\"A\" Cell Breeding Device",
            "type": "Spell Card",
            "humanReadableCardType": "Continuous Spell",
            "frameType": "spell",
            "desc": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
            "race": "Continuous",
            "archetype": "Alien",
            "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-breeding-device-9766",
            "card_sets": [
                {
                    "set_name": "Force of the Breaker",
                    "set_code": "FOTB-EN043",
                    "set_rarity": "Common",
                    "set_rarity_code": "(C)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 34541863,
                    "image_url": "https://images.ygoprodeck.com/images/cards/34541863.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/34541863.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.15",
                    "tcgplayer_price": "0.23",
                    "ebay_price": "0.99",
                    "amazon_price": "24.45",
                    "coolstuffinc_price": "0.25"
                }
            ] },
    { "id": 64163367,
            "name": "\"A\" Cell Incubator",
            "type": "Spell Card",
            "humanReadableCardType": "Continuous Spell",
            "frameType": "spell",
            "desc": "Each time an A-Counter(s) is removed from play by a card effect, place 1 A-Counter on this card. When this card is destroyed, distribute the A-Counters on this card among face-up monsters.",
            "race": "Continuous",
            "archetype": "Alien",
            "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-incubator-8856",
            "card_sets": [
                {
                    "set_name": "Gladiator's Assault",
                    "set_code": "GLAS-EN062",
                    "set_rarity": "Common",
                    "set_rarity_code": "(C)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 64163367,
                    "image_url": "https://images.ygoprodeck.com/images/cards/64163367.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/64163367.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/64163367.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.13",
                    "tcgplayer_price": "0.23",
                    "ebay_price": "1.25",
                    "amazon_price": "0.50",
                    "coolstuffinc_price": "0.25"
                }
            ] },
  ];

    test("Une carte est bien nommé", () => {
        const card =
        render(<CardData prop={mockCards[0]}/>);
        const goodName = screen.getByText(/Cell Breeding Device/);
        expect(goodName).toBeInTheDocument();
        const goodDesc = screen.getByText(/During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls/);
        expect(goodDesc).toBeInTheDocument();
    }) 

    test('Card data flex orientation', () => {
        render(<CardData prop={mockCards[0]}/>);
        const cardData = screen.getByTestId('cardData');
        expect(cardData).toHaveStyle({display: "flex", "flex-direction": "column"}); 
        
        const CardImg = screen.getByTestId('CardImg');
        expect(CardImg).toHaveStyle({width: "30vw", margin: "2vh"})
        const cardName = screen.getByTestId('cardName');
        expect(cardName).toHaveStyle({margin: "2vh","padding": "2vh", "border-style": "groove"})
        const cardEffect = screen.getByTestId('cardEffect');
        expect(cardEffect).toHaveStyle({"border-style": "inset", "margin": "2vh", "height": "20vh"})
        const cardCaract = screen.getByTestId('cardCaract');
        expect(cardCaract).toHaveStyle({"margin": "3vh", "height": "30vh"})
    })