import { useEffect, useState } from "react";

const useDate = () => {
  const local = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(local, { weekday: "long" });
  const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(local, {
    month: "long",
  })}\n\n`;
  const time = today.toLocaleDateString(local, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return { date, time };
};
export { useDate };
