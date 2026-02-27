import { cn } from "@/lib/utils";

interface LanguageData {
  label: string;
  value: number;
  color: string;
}

interface MathData extends LanguageData {
  startPercent: number;
  endPercent: number;
  slicePercent: number;
}

interface PieChartProps {
  data: LanguageData[];
  className?: string;
}

export function LanguagePieChart({ data, className }: PieChartProps) {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const slices = data.reduce((acc: MathData[], slice: LanguageData) => {
    const startPercent = acc.length === 0 ? 0 : acc[acc.length - 1].endPercent;
    const slicePercent = slice.value / total;
    const endPercent = startPercent + slicePercent;
    acc.push({ ...slice, startPercent, endPercent, slicePercent });
    return acc;
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 p-6 border-4 border-border bg-card text-card-foreground shadow-md transition-colors duration-300",
        className,
      )}
    >
      <svg
        viewBox="-1 -1 2 2"
        className="w-48 h-48 -rotate-90 overflow-visible"
      >
        {slices.map((slice) => {
          const [startX, startY] = getCoordinatesForPercent(slice.startPercent);
          const [endX, endY] = getCoordinatesForPercent(slice.endPercent);

          const largeArcFlag = slice.slicePercent > 0.5 ? 1 : 0;
          const pathData = [
            `M ${startX} ${startY}`,
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            `L 0 0`,
            "Z",
          ].join(" ");

          return (
            <path
              key={slice.label}
              d={pathData}
              fill={slice.color}
              stroke="var(--border)"
              strokeWidth="0.04"
              className="transition-all hover:opacity-80 cursor-pointer dark:hover:drop-shadow-[0_0_8px_rgba(196,161,255,0.5)]"
              style={{
                filter: "drop-shadow(0 0 2px rgba(0,0,0,0.1))",
              }}
            />
          );
        })}
      </svg>

      <div className="flex flex-col gap-2">
        {data.map((slice) => (
          <div key={slice.label} className="flex items-center gap-3">
            <div
              className="w-4 h-4 border-2 border-border shadow-xs"
              style={{ backgroundColor: slice.color }}
            />
            <span className="font-bold uppercase text-sm tracking-tight">
              {slice.label} — {Math.round((slice.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
