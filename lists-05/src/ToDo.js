import React from "react";

export class ToDo extends React.Component{
    state = {
        items: [],
        item: ""
    }


    HandleAddInput = () =>{
        this.setState((prev) =>{
           return {
            ...prev,
            items: [...prev.items, this.state.item],
            item: ""
        }           
        })        
    }


    HandleAddItem = (event) =>{
        const value = event.target.value
        this.setState({
            item: value
        })
    }

    HandleResetList = () =>{
        this.setState({
            items: []
        })
    }

    

    render(){

        const items = this.state.items.map((name, index) =><li key={name + index}>{name}</li>)

        return(
            <div>
                <input value={this.state.item} onChange={this.HandleAddItem} placeholder="aggiungi elemento"/>
                <button onClick={this.HandleAddInput}>Add</button>
                <button onClick={this.HandleResetList}>Reset</button>
                <ul>
                    {items}
                </ul>               
            </div>
        )
    }
}