import React from 'react'
import {IgrRadialGaugeModule} from "igniteui-react-gauges/ES5/igr-radial-gauge-module";
import {IgrRadialGauge} from "igniteui-react-gauges/ES5/igr-radial-gauge";
import {IgrRadialGaugeRange} from "igniteui-react-gauges/ES5/igr-radial-gauge-range";
import {ApiClient} from "../ApiClient";

IgrRadialGaugeModule.register();

function updateStatus(currentStatus, plt, it) {
  switch (currentStatus) {
    case 'good':
      if (plt < it[1][0] || plt > it[3][1]) {
        return 'bad';
      } else {
        return 'good';
      }
    default:
      if (plt > it[2][0] && plt < it[2][1]) {
        return 'good';
      } else {
        return 'bad';
      }
  }
}

function doSwitch(plt, it) {
  if (plt > it[2][0] + 9 && plt < it[2][1] - 9) {
    return true;
  } else {
    return false;
  }
}

const chartStyle = {
  height: 100,
}

const arcsLength = [[0.3, 0.15, 0.1, 0.15, 0.3], [0.1, 0.2, 0.1, 0.3, 0.3]]
const elements = [[[-90, -40], [-40, -10], [-10, 10], [10, 40], [40, 90]],
  [[-90, -80], [-80, -60], [-60, -40], [-40, -10], [-10, 90]]]

export class Gauge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      curr_it: 1,
      counter: 0
    }
  }

  componentDidMount() {
    this.setState({
      apiClient: new ApiClient(80, (result) => {
        this.setState({text: result});
        this.props.setStatus(updateStatus(this.props.status, result.gyro.plt, elements[this.state.curr_it]));
      })
    });
  }

  componentWillUnmount() {
    this.state.apiClient.stop();
    setTimeout(this.props.setStatus, 100, 'good');
  }

  render() {
    const it = elements[this.state.curr_it];
    if (this.state.text) {
      if (doSwitch(this.state.text.gyro.plt, it)) {
        if (this.state.curr_it == 0) {
          this.state.counter = this.state.counter + 1;
        }
        this.state.curr_it = 1 - this.state.curr_it
      }
      return (
        <React.Fragment><div className="gauge">
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
            minimumValue={-90}
            value={this.state.text.gyro.plt}
            maximumValue={90}
            interval={30}>
            <IgrRadialGaugeRange name={"1"}
                                 startValue={it[0][0]} endValue={it[0][1]} brush={"red"}/>
            <IgrRadialGaugeRange name={"2"}
                                 startValue={it[1][0]} endValue={it[1][1]} brush={"yellow"}/>
            <IgrRadialGaugeRange name={"3"}
                                 startValue={it[2][0]} endValue={it[2][1]} brush={"green"}/>
            <IgrRadialGaugeRange name={"4"}
                                 startValue={it[3][0]} endValue={it[3][1]} brush={"yellow"}/>
            <IgrRadialGaugeRange name={"5"}
                                 startValue={it[4][0]} endValue={it[4][1]} brush={"red"}/>
          </IgrRadialGauge></div><div className="count">{this.state.counter}</div></React.Fragment>
      )
    }
    return (<div></div>);
  }
}
