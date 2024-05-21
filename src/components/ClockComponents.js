import React, { useEffect, useState } from "react";

const ClockComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Membersihkan interval ketika komponen unmount
  }, []); // Efek hanya dijalankan sekali setelah render pertama

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  const formattedDate = new Intl.DateTimeFormat("id", options).format(currentDate);
  const formattedTime = new Intl.DateTimeFormat("en-US", { timeStyle: "medium" }).format(currentDate);

  return (
    <div className="clock-container">
      <h1 className="date">{formattedDate}</h1>
      <h2 className="mt-[5px]">{formattedTime}</h2>
    </div>
  );
};

export default ClockComponent;
