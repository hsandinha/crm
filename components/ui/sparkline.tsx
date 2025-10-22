type SparklineProps = {
  values: number[];
  stroke?: string;
};

export function Sparkline({
  values,
  stroke = "url(#spark-gradient)"
}: SparklineProps) {
  if (!values.length) {
    return null;
  }

  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1 || 1)) * 100;
      const normalized = (value - min) / (max - min || 1);
      const y = 100 - normalized * 80 - 10;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-16 w-full overflow-visible"
    >
      <defs>
        <linearGradient id="spark-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B7AFF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#8777FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#20C997" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="100"
        cy={
          100 - ((values.at(-1)! - min) / (max - min || 1)) * 80 - 10
        }
        r={3.5}
        fill="#0B7AFF"
      />
    </svg>
  );
}
