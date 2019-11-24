import React from 'react';
import {Area, AreaChart, Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {Carousel} from "react-responsive-carousel";
import Tile from "./Tile";

// constant data is used here as an example.
// in a production environment real user data could be collected, stored and displayed here.
const lastWeek = [
  {day: 'Mon', 'Deadlifts': 18, 'correct time in %': 21},
  {day: 'Tue', 'Deadlifts': 8, 'correct time in %': 85},
  {day: 'Wed', 'Deadlifts': 21, 'correct time in %': 63},
  {day: 'Thu', 'Deadlifts': 9, 'correct time in %': 81},
  {day: 'Fri', 'Deadlifts': 23, 'correct time in %': 32},
  {day: 'Sat', 'Deadlifts': 15, 'correct time in %': 74},
  {day: 'Sun', 'Deadlifts': 12, 'correct time in %': 86},
];

const History = () => {
  return (
    <React.Fragment>
      <div className="history-graph">
        <div>Last 7 days</div>
        <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay interval={10000} infiniteLoop>
          <div>
            <div>Deadlifts</div>
            <div style={{height: 320, marginRight: 30}}>
              <ResponsiveContainer height={300}>
                <BarChart data={lastWeek}>
                  <XAxis dataKey="day" stroke="#000"/>
                  <YAxis stroke="#000"/>
                  <Bar dataKey="Deadlifts" fill="#460a40"/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <div>Correct time in %</div>
            <div style={{height: 320, marginRight: 30}}>
              <ResponsiveContainer height={300}>
                <AreaChart data={lastWeek}>
                  <XAxis dataKey="day" stroke="#000"/>
                  <YAxis stroke="#000"/>
                  <Area type="monotone" dataKey="correct time in %" stroke="#460a40" fill="#460a40"/>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="history-comparison">
        <div className="avg">
          <Tile weight="50 kg" count={6} type="cat"/>
          <div className="description">
            average weight lifted this week
          </div>
        </div>
        <div className="total">
          <Tile weight="150 kg" count={1} type="panda"/>
          <div className="description">
            total weight lifted
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default History;
