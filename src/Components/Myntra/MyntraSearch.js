import {useState} from 'react'
import { FaSistrix } from "react-icons/fa";
export const MyntraSearch = () => {
    const [linkData, setLinkData] = useState();
    const handelData = () => {
        let url = "https://www.myntra.com/" + linkData;
        window.open(url, "_blank");
      };
    return (
        <div className="google-container myntra">
            <input
                onChange={(e) => setLinkData(e.target.value)}
                placeholder="Search Myntra"
                type="text"
            />
            <button onClick={handelData} >
                <FaSistrix id='icon'/>
            </button>
        </div>
    )
}


