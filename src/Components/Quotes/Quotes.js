import { useEffect, useState } from "react";
import axios from "axios";

export const Quotes = () => {
    const [quote, setQuote] = useState();
    useEffect(() => {
        const random = Math.floor(Math.random() * 1643 - 1);
        (async () => {
            try {
                const res = await axios.get("https://type.fit/api/quotes");
                if (res.status === 200) {
                    setQuote(res.data[random].text);
                } 
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    return (
        <>
        <div className="quotes-section">
            <q>{quote}</q>
        </div>
        </>
    )
}
