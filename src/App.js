import { useEffect, useState } from "react";
import "./App.css";
import { Home, LandingPage } from "./Pages";

function App() {
  const [existingUser, setExistingUser] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("name");
    setExistingUser(user);
  }, [existingUser]);
  
  return <>{ existingUser? <LandingPage/> : <Home />}</>;
}

export default App;
