function YearLine({ numberOfYears }) {
  return (
    // Vertical Line Bullets
    <div className="absolute left-10 w-1 bg-red-500 h-full">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"></div>

      {/* Render Bullets */}
      {Array.from({ length: numberOfYears }).map((_, index) => (
        <div
          key={index}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"
          style={{
            top: `${292 + index * 600}px`, // Start at 50vh, then increment by 100vh
          }}
        ></div>
      ))}
    </div>
  );
}

export default YearLine;
