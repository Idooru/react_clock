import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  width: "470px",
  height: "230px",
  background: "gray",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "14px",
  border: "5px solid white",
};

export type ClockProps = {
  today: Date;
};

export const Clock: FC<ClockProps> = ({ today }) => {
  return (
    <div style={style}>
      <h1>{today.toLocaleTimeString()}</h1>
      <h2>{today.toLocaleDateString()}</h2>
    </div>
  );
};
