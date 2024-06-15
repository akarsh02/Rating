import React , {useState,useEffect} from 'react';
import './App.css';
import Chart from './chart';
import Bar from './graph';

const data = [
  { people: 35, rating: 1 },
  { people: 50, rating: 2 },
  { people: 40, rating: 3 },
  { people: 22, rating: 4 },
  { people: 10, rating: 5 },

];

function App() {

  const [ratingData, setratingData] = useState(data);
  const maxRating = 50;
  const chartHeight = maxRating + 50;
  const barWidth = 20;
  const barMargin = 30;
  const numberofBars = ratingData.length;
  let width = numberofBars * (barWidth + barMargin);

  useEffect(() => {
    console.log(JSON.stringify(ratingData));
 
  });

  const createRandomData = (data) => data.map((exp) => ({
    people: exp.people,
    rating: Math.floor(Math.random() * (1 + 5 - 0)) + 0
  }))
  let refreshChart = ()=> {
    const newData = createRandomData(ratingData);
    setratingData(newData);
  
  }

  return (
    <>
      <p className="legend">
        <span className="font-bold inline-block text-2xl mb-5">Ratings</span>
      </p>

      <Chart height={chartHeight} width={width}>
      {ratingData.map((data, index) => {
        const barHeight = (data.rating/data.people)*100;
        return (
          <Bar
          key={data.people}
          x={index * (barWidth + barMargin)}
          y={chartHeight - barHeight}
          width={barWidth}
          height={barHeight}
          expenseName={data.rating}
         
          />
        );
      })}
      </Chart> 

      <button className='mt-4 bg-zinc-500 text-white w-36 justify-center rounded-xl mx-auto flex text-lg' onClick={refreshChart}>Regenerate</button>
    </>
  );
}



export default App;







