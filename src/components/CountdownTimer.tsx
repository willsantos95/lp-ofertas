import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const TOTAL_SECONDS = 2 * 60 + 30;

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : TOTAL_SECONDS));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="flex items-center gap-2 text-base font-bold text-urgency animate-blink-urgent">
        <Clock className="h-5 w-5" />
        ⚠️ O acesso VIP gratuito encerra em:
      </p>
      <div className="flex gap-2 sm:gap-3">
        <TimeBox value={mins} label="MIN" />
        <span className="text-4xl sm:text-5xl font-black text-urgency">:</span>
        <TimeBox value={secs} label="SEG" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-foreground text-background rounded-lg px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] shadow-lg">
      <span className="text-3xl sm:text-5xl font-black tabular-nums">{value}</span>
    </div>
    <span className="text-xs font-bold text-muted-foreground mt-1">{label}</span>
  </div>
);

export default CountdownTimer;
