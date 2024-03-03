import { useState } from "react";
import { useInterval } from "./useInterval";

export const useClock = () => {
  const [today, setToday] = useState<Date>(new Date());
  useInterval(() => setToday(new Date()), 1000);
  return today;
};
