import { useState, useEffect } from 'react'

export const Time = () => {
    const [user, setUser] = useState("guest");
    const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const userName = localStorage.getItem("name");
		setUser(userName);
	}, []);


    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
	const minutes = minute / 10 < 1 ? `0${minute}` : minute;

    const greeting = `Good ${
		(hour < 4 && "morning") ||
		(hour < 12 && "morning") ||
		(hour < 16 && "afternoon") ||
		(hour < 21 && "evening") ||
		"evening"
	}`;

    useEffect(() => {
		setInterval(() => {
			setCurrentDate(() => new Date());
		}, 1000);
	}, []);
    const showTime = `${hour}:${minutes}`;
  return (
    <>
        <div className="time-container">
            {showTime}
        </div>
        <div className="greet-user-container">
            {greeting}, {user.toUpperCase()} !
        </div>
    </>
  )
}