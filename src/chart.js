
const Chart = ({ children, width, height }) => (


    <svg
      viewBox={`0 0 ${width} ${height}`}   
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
      
    >
    <line x1="0" y1="0" x2="0" y2="700" stroke='green' stroke-width="2" />
    <line x1="0" y1="100" x2="250" y2="100" stroke='green' stroke-width="2"  />
    {children}
  
    </svg>
    
  );

  export default Chart