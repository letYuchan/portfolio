interface CheckerPatternProps {
  height?: number;
  squareSize?: number;
}

const CheckerPattern = ({
  height = 40,
  squareSize = 20,
}: CheckerPatternProps) => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height: `${height}px`,
        backgroundImage: `
          linear-gradient(45deg, #000 25%, transparent 25%),
          linear-gradient(-45deg, #000 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #000 75%),
          linear-gradient(-45deg, transparent 75%, #000 75%)
        `,
        backgroundSize: `${squareSize}px ${squareSize}px`,
        backgroundPosition: `0 0, 0 ${squareSize / 2}px, ${squareSize / 2}px ${
          -squareSize / 2
        }px, ${-squareSize / 2}px 0px`,
        backgroundColor: "#fff",
      }}
    />
  );
};

export default CheckerPattern;
