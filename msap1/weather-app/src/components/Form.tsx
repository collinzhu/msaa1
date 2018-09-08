import TextField from '@material-ui/core/TextField';
import * as React from 'react';
export interface Iprops{
    cityValue:string,
    onTextChange:any,
    onSearch:any
}
export default class Form extends React.Component<Iprops,{}>{
    public render(){ 
        return(
            <div >
             <form>
                <TextField type = "text" name = "city" placeholder = 'city'
                  value = {this.props.cityValue}
                  onChange ={this.props.onTextChange}
                />
                <button onClick={this.props.onSearch}> get weather</button>
             </form>
            </div>
           
        );
    }

}
