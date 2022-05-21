import {useState} from 'react'
import { FaSistrix } from "react-icons/fa";
export const Stackoverflow = () => {
    const [linkData, setLinkData] = useState();


    const handelData = () => {
        let url = "http://stackoverflow.com/search?q=" + linkData;
        window.open(url, "_blank");
      };
    return (
        <div className="google-container stack-overflow">
            <input
                onChange={(e) => setLinkData(e.target.value)}
                placeholder="Search StackoverFlow"
                type="text"
            />
            <button onClick={handelData} >
                <FaSistrix id='icon'/>
            </button>
        </div>
    )
}
