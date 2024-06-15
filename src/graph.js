
const Bar = ({ x, y, width, height, expenseName }) => (
    <>
      <rect x={x} y={y} width={width} height={height} /> 
      <text x={x + width / 3} y={y - 5}>
            {expenseName}
      </text>
    </>
  );
export default Bar