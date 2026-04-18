import { useEffect, useState } from "react";
import { Users } from "lucide-react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(78);

  useEffect(() => {
    // Random progress always above 75%
    setProgress(Math.floor(Math.random() * 18) + 78); // 78-95
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + (Math.random() > 0.5 ? 1 : -1);
        if (next < 78) return 78;
        if (next > 96) return 96;
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <p className="flex items-center gap-1.5 text-sm font-bold text-urgency animate-shake">
          <Users className="h-4 w-4" />
          Vagas quase preenchidas...
        </p>
        <span className="text-sm font-black text-urgency">{progress}%</span>
      </div>
      <div className="h-4 bg-muted rounded-full overflow-hidden border-2 border-foreground/10">
        <div
          className="h-full progress-shimmer transition-all duration-700 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
