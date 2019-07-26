import React, {component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import store from "../../../redux/store"


class Dashboard extends component {
    component();
    super(){
        this.state ={
            house: store.getState().house
        }
    }


componentDidMount(){
this.getHouses();

}

 getHouses = () => {
    axios.get("/api/properties").then(res => {
        const houses = res.data;
        this.setState({houses: res.data});
    })
};

deleteHouse(id){
    axios
    .delete(`http://localhost:5050/api/properties/${id}`)
    .then(response => {
        this.setState({inventory: response.data});
    })
    .catch(() => {
        alert("Please check infomation");
    });
    
}

    render() {
        return(
            <div className="main-container">
                <div className="title">
                    <Header />
                    <h1 className="heading">Dashboard</h1>
                    <Link to="./../Wizard/Wizard.component.jsx">
                        <button className="add-prop">Add New Property</button>
                    </Link>
                </div>
            </div>
        )
        }
    }

export default Dashboard