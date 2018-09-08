import * as React from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import{ Weather } from './components/Weather';
const API_KEY = "94dc73189ca4d62f86e3b2b2fdaee42e";

 export interface Istate{
  city: string,
  citystate: string,
  descriptionState: string,
  humidityState:string,
  tempState:string
  
} 
class App extends React.Component<{},Istate> {
  constructor(props:any){
    super(props);
    this.state = {
      city:"",
      citystate:"",
      descriptionState:"",
      humidityState:"",
      tempState:""
     };
  }
  public onSearchHandler = async (e:React.FormEvent<HTMLInputElement>) =>{
    e.preventDefault();
  
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},nz&appid=${API_KEY}`);
    const data = await apiCall.json();
    this.setState({
      citystate: data.name,
      descriptionState: data.weather[0].description,
      humidityState: data.main.humidity,
      tempState: data.main.temp,
    
    })
  }

  public onTextChangeHandler = (e:any) =>{
    let input = this.state.city;
    input = e.currentTarget.value;
    this.setState({city:input})
  }

  public render() {
    return (
      
      <div className="App">
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Title/>
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form onSearch = {this.onSearchHandler}
                      onTextChange = {this.onTextChangeHandler}
                      cityValue = {this.state.city}
                    />
                    <Weather 
                      tempre = {this.state.tempState}
                      city = {this.state.citystate}
                      humidity = {this.state.humidityState}
                      description = {this.state.descriptionState}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
