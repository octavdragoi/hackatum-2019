import React from 'react'
import {IgrRadialGaugeModule} from "igniteui-react-gauges/ES5/igr-radial-gauge-module";
import {IgrRadialGauge} from "igniteui-react-gauges/ES5/igr-radial-gauge";
import {IgrRadialGaugeRange} from "igniteui-react-gauges/ES5/igr-radial-gauge-range";
import {ApiClient} from "../ApiClient";

IgrRadialGaugeModule.register();

/*
      <GaugeChart id="gauge-chart1" 
        style={chartStyle}
        animate={false} 
        nrOfLevels={420}
        arcsLength={arcsLength[1]}
        colors={['#EA4228', '#F5CD19', '#5BE12C', '#F5CD19', '#EA4228']}
        percent={text.gyro.y}
        arcPadding={0.02}
          <IgrRadialGaugeRange key={1}
            startValue={5}  endValue={15} brush="red" />
          <IgrRadialGaugeRange key={2}
            startValue={15}  endValue={35} brush="yellow" />
          <IgrRadialGaugeRange key={3}
            startValue={35}  endValue={45} brush="green" />
*/
const chartStyle = {
  height: 100,
}

const arcsLength = [[0.3, 0.15, 0.1, 0.15, 0.3], [0.1, 0.2, 0.1, 0.3, 0.3]]
const elements = [[[-180, -40], [-40, -10], [-10, 10], [10, 40], [40, 180]]]

export class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    this.setState({
      apiClient: new ApiClient(20, (result) => {
        this.setState({text: result})
      })
    });
  }

  render() {
    /*
     <IgrRadialGauge
       scaleStartAngle={180}
       scaleEndAngle={0}
       scaleBrush="DodgerBlue"
       scaleSweepDirection="Clockwise"
       scaleOversweep={1}
       scaleOversweepShape="Fitted"
       scaleStartExtent={0.45}
       scaleEndExtent={0.575}
       fontBrush="White"
       font="1px Verdana"
       height="300px" width="300px"
       interval={10}
       tickStartExtent={0.575}
       tickEndExtent={0.575}
       tickStrokeThickness={2}
       tickBrush="Black"
       minorTickCount={4}
       minorTickEndExtent={0.575}
       minorTickStartExtent={0.575}
       minorTickStrokeThickness={1}
       minorTickBrush="Black"
       backingShape="Fitted"
       backingOutline="Gray"
       backingOversweep={5}
       backingCornerRadius={10}
       backingStrokeThickness={5}
       backingOuterExtent={0.8}
       backingInnerExtent={0.15}
       minimumValue={-180} value={text.gyro.x}
       maximumValue={180} interval={60} >
         <IgrRadialGaugeRange name = {"1"}
         startValue={it[0][0]} endValue={it[0][1]} brush={"red"} />
         <IgrRadialGaugeRange name = {"2"}
         startValue={it[1][0]} endValue={it[1][1]} brush={"yellow"} />
         <IgrRadialGaugeRange name = {"3"}
         startValue={it[2][0]} endValue={it[2][1]} brush={"green"} />
         <IgrRadialGaugeRange name = {"4"}
         startValue={it[3][0]} endValue={it[3][1]} brush={"yellow"} />
         <IgrRadialGaugeRange name = {"5"}
         startValue={it[4][0]} endValue={it[4][1]} brush={"red"} />
       </IgrRadialGauge>
       */
    if (this.state.text) {
      const it = elements[0];
      return (
        <div><pre>{JSON.stringify(this.state.text, function (key, val) {
          return val.toFixed ? Number(val.toFixed(3)) : val;
        })}</pre>
        </div>
      )
    }
    return (<div></div>);
  }
}