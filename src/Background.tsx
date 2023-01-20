export const Background = () => {
  return (
    <svg
      height="100%"
      width="100%"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        zIndex: -1,
      }}
    >
      <defs>
        <pattern
          id="pattern"
          width="80"
          height="80"
          x={20}
          y={20}
          patternUnits="userSpaceOnUse"
        >
          <rect width={4} height={4} fill="rgba(255, 255, 255, 0.1)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  );
};
