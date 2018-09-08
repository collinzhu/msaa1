import * as React from 'react';
export interface Iprops{
  tempre:any,
  city:any,
  humidity:any,
  description:any
}
export class Weather extends React.Component<Iprops>{
    public render(){
        return(
            <div>
              {this.props.tempre &&<p className ="weather__key">tempreture: {this.props.tempre}</p>}
              {this.props.city &&<p className ="weather__key">location: {this.props.city}</p>}
              {this.props.humidity&&<p className ="weather__key">humidity: {this.props.humidity}</p>}
              {this.props.description&&<p className ="weather__key">description: {this.props.description}</p>}
            </div>
        );
    }
}

export default Weather;