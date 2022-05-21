import "./GoogleSearch.css"
import { FaSistrix } from "react-icons/fa";
function GoogleSearch() {
    return (
        <div className="google-container">
            <form
                action="https://www.google.com/search"
                method="get"
                name="searchform"
            >
                <input
                    name="q"
                    placeholder="Search Google"
                    type="text"
                />
                <button type="submit">
                <FaSistrix/>
                </button>
            </form>
        </div>
    );
}

export { GoogleSearch }; 