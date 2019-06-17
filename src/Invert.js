import React,{Component} from 'react';


class Invert extends Component {
    state = { 
        input:''
     }

     action=()=>{
         const istring=document.getElementById('istring').value.split("");
         console.log(istring);
         let character = istring.map(i=>{


            if (i === i.toUpperCase()) {
            return i.toLowerCase()
            }
            else if (i === i.toLowerCase()){
               return i.toUpperCase()
            }else{
                return i;
            }
        })


         this.setState({
             input:character
         })
         
     }
    render() { 
        return ( <div className = "container">
<h1>Invert Strings</h1>  
<input type="text" id="istring" placeholder="Enter any String"></input><br></br><br></br>
<button onClick={this.action} value="Submit">INVERT</button><br></br><br></br>
<h2 id ="inverted">{this.state.input}</h2>
</div> );
    }
}
 
export default Invert;




