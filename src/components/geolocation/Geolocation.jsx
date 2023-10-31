import React, { useEffect, useState } from "react";

const Geolocation = () => {
  const [localTime, setLocalTime] = useState(null);

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const userTimezoneOffset = new Date().getTimezoneOffset();
        const userTime = new Date(
          position.timestamp - userTimezoneOffset * 60000
        );

        const formattedTime = userTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        setLocalTime(formattedTime);
      });
    }
  }, []);

  return (
    <div className="bg-gray-900 bg-opacity-70 absolute top-20 left-20 rounded-lg p-4">
      {localTime && (
        <div>
          <p className="text-8xl text-gray-100">{localTime}</p>
        </div>
      )}
    </div>
  );
};

export default Geolocation;
