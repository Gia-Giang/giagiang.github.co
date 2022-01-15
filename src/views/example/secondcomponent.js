import React from "react";
export default class Secondcomponent extends React.Component{
    handelClick=()=>{
        const index=this.props.index;
        this.props.data(index)
     }
    render(){
        return(
            <>
                <button onClick={()=>{this.handelClick()}}>x</button>
            </>
        )
    }
}