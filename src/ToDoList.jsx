import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import { newStyles } from '@material-ui/core/styles';
import ListCom from "./ListCom.jsx";
const ToDoList=()=>{
  let [item,setItem]=useState("");
  let [newitem,setNewItem]=useState([]);
  const itemEvent=(event)=>{
    setItem(event.target.value);
  }
  const listOfItem=()=>{
    setNewItem((preValue)=>{
      return [...preValue,item];
    })
  }
  return(
    <>
    <div className="main-div">
    <div className="center-div">
    <br/>
    <h1>TODO LIST</h1>
    <br/>
    <input type="text" placeholder="Add an item" value={item} onChange={itemEvent}/>
    <Button className="btn" onClick={listOfItem}><Add/></Button>
    <br/>
    <ol>
    {newitem.map((val,index)=>{
      return (<ListCom key={index} text={val}/>)
    })}
    </ol>
    <br/>
    </div>
    </div>
    </>
  )
}
export default ToDoList;
