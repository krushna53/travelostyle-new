export default function DashedBorderFrame({
  children,
  className = "",
  innerClassName = "",
  borderColor = "#ffffff",
  borderWidth = 3,
  horizontalDash = 18,
  verticalDash = 20,
  dashGap = 14,
}) {
  const horizontalPattern = `repeating-linear-gradient(90deg, currentColor 0 ${horizontalDash}px, transparent ${horizontalDash}px ${horizontalDash + dashGap}px)`;
  const verticalPattern = `repeating-linear-gradient(180deg, currentColor 0 ${verticalDash}px, transparent ${verticalDash}px ${verticalDash + dashGap}px)`;

  return (
    <div className="relative" style={{ color: borderColor }}>
      {/* Borders */}
      <span className="pointer-events-none absolute inset-x-0 top-0" style={{ height: borderWidth, backgroundImage: horizontalPattern }} />
      <span className="pointer-events-none absolute inset-x-0 bottom-0" style={{ height: borderWidth, backgroundImage: horizontalPattern }} />
      <span className="pointer-events-none absolute inset-y-0 left-0" style={{ width: borderWidth, backgroundImage: verticalPattern }} />
      <span className="pointer-events-none absolute inset-y-0 right-0" style={{ width: borderWidth, backgroundImage: verticalPattern }} />

      {/* ✅ FIXED: apply layout here */}
      <div className={`relative z-10 ${className} ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}