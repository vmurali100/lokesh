import React, { Component } from 'react';

class SecondComponent extends Component{
    render(){
        return(
            <div>
                {allObjectInfo.map((a)=>{
                    
                    return <h1 key={a}>{obj[a]}</h1>
                })}
                {allObjectInfo.map((b)=>{
                    return <h2 key={b}>{obj2[b]}</h2>
                })}
            </div>
        )
    }
}
const myName = "lokesh"
var obj = {
    name: "Kumar"
}
let obj2 = {
    name: "murali",
    lname: "krishna",
    age : "30"
}
const allObjectInfo = Object.keys(obj2)
console.log(Object.keys(obj))

export default SecondComponent;