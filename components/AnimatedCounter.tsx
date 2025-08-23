"use client";

import CountUp, { CountUpProps } from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return <CountUp decimal="," decimals={2} prefix="$" end={amount} />;
};

export default AnimatedCounter;
