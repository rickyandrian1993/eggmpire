import { getServerNow } from "@/app/lib/time";
import CountdownClient from "./CountdownClient";

export default function CountdownServer() {
  const targetDate = process.env.COUNTDOWN_DATE;
  console.log("targetDate", targetDate);

  if (!targetDate) {
    throw new Error("COUNTDOWN_DATE is not defined");
  }

  const target = new Date(targetDate).getTime();
  const serverNow = getServerNow();

  return <CountdownClient targetTime={target} serverNow={serverNow} />;
}
