import React from "react";
import Secondcomponent from "./secondcomponent";
class Firstcomponent extends React.Component{
    state={
        name:"",
        password:""
    }
    handelName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handelPassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handelOnclick=(event)=>{
        const {name,password}=this.state;
        event.preventDefault();
        this.props.addJob(name,password);
        this.setState({
            name:"",
            password:""
        })
    }
    render(){
        const datas=this.props.data;
        return(
            <>
                <input name="name" type={"text"} value={this.state.name} onChange={(event)=>{
                    this.handelName(event)
                }}/><br/>
                <input name="password" type={"password"} value={this.state.password} onChange={(event)=>{
                    this.handelPassword(event)
                }}/>
                {datas.map((data)=>{
                    return (
                        <div key={data.id} className="reduce">
                            <li>{data.id}</li>
                            <li>{data.name}</li>
                            <li>{data.quantily}</li>
                            <li>{data.total}</li>
                            <Secondcomponent index={data.id} data={this.props.handelDelete}/>
                        </div>
                    )
                })}
                <input type={"submit"} onClick={(event)=>{
                    this.handelOnclick(event)
                }}/>
                <div>{this.props.roam}</div>
            </>
        )
    }
}
export default Firstcomponent