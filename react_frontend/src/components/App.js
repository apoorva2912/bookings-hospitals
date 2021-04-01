import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data:[],
        };
    }

    componentDidMount()
    {
        fetch("slots/api/slot/")
          .then(response => {
            if (response.status > 400) {
                return this.setState(() =>{
                    return { placeholder: "Something went Wrong"};
                });
            }
            return response.json();
        })
        .then(data => {
            this.setState(() => {
                return {
                    data,
                    loaded: true
                };
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.data.map(slots =>{
                    return (
                        <div key={slots.id}>
                            {slots.time}
                            {slots.patient}
                        </div>
                    );
                })}
            </div>
        );
    }
}