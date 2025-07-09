import axios from "axios";
import { useEffect, useState } from "react"
import { Card } from "../type/CardType";

const useCard = () => {
    const [cardData, setData] = useState<Card[]>([])
    const [cardLoading, setLoading] = useState(true)
    const [cardError, setError] = useState<Error | null>(null);
    useEffect(() => {
        const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0";
        setLoading(true);
        const fetchData = async() => {
            try{
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                console.log("result.data:",result.data)
                setData(result.data as Card[]);
            }catch(error) {
                console.log("error:",error)
                setError(error as Error);
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("cardData:",cardData)
    }, [cardData])
    return {cardData, cardLoading, cardError}
}
export default useCard;