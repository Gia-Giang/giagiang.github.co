import React from "react";
import ReactDOM from "react-dom";
import Firstcomponent from "./firstcomponent";
import Secondcomponent from "./secondcomponent";
import "./style/style.scss"
class Component extends React.Component{
   state={
     roam:0,
     data:[
       {
         id:0,
         name:"iphone",
         quantily:0,
         total:100
       },
       {
         id:1,
         name:"iphone6",
         quantily:0,
         total:4000
       },
       {
        id:2,
        name:"iphone11",
        quantily:0,
        total:2000
      },
     ]
   }
   addJob=(name,password)=>{
    if(!name || !password){
      return false
    }
    const data=this.state.data;
    const job={
      id:Math.floor(Math.random()*100+1),
      name:name,
      total:password
    }
    this.setState({
      data:[...data,job]
    })
   }
   handelDelete=(value)=>{
     const change=this.state.data[value].quantily+2;
     this.state.data[value].quantily=change
     
    this.setState((values)=>{
      const bb=2*this.state.data[value].total+values.roam;
      
      return{
        roam:bb,
        data:this.state.data
      }
    })
   }
   render(){
    console.log(this.state.roam)
     return(
        <div className="sum">
          <Firstcomponent roam={this.state.roam} addJob={this.addJob} handelDelete={this.handelDelete} roam={this.state.roam} data={this.state.data}/>
        </div>
     )
   }
}
export default Component;