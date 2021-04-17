import React, { Fragment } from 'react';
import logo1 from "../images/ngo2.png"
import logo2 from "../images/ngo3.png"
import logo3 from "../images/ngo4.jpeg"
import logo4 from "../images/ngo1.jpeg"

const NGOS = [
    {"logo" : logo1, "name" : "Sanghamithra","desc" : "Sanghamitra Foundation focuses on CHILDREN & YOUTH EDUCATION HEALTH & NUTRITION and is headquartered in Kakinada, Andhra Pradesh, India."},

    {"logo" : logo2, "name" : "Goonj","desc" : "Goonj is a non-governmental organisation headquartered in New Delhi, India which undertakes disaster relief, humanitarian aid and community development in parts of 23 states across India. "},

    {"logo" : logo3, "name" : "Katha","desc" : "Katha is a registered non-profit and non-governmental organisation based in Delhi that works in the field of community development, child welfare, education and literature. "},

    {"logo" : logo4, "name" : "Grow","desc" : "GROW is an NGO dedicated to promote care and regeneration of natural resources, building a more equitable and sustainable society, generating awareness in people who live in the less favored sectors."}
]
class AllNGOs extends React.Component{

    constructor(){
        super();
    }
    render(){
        return(
            <Fragment>
                <div style={{marginLeft:"10vw"}}>
                    {NGOS.map((value,index)=>{
                        return (<div class="card mb-3" style={{width: "70vw",backgroundColor:"#D8D8D8"}}>
                            <div class="row no-gutters">
                                <div class="col-md-3">
                                    <img src={value["logo"]} class="card-img" alt="..."/>
                                </div>
                            <div class="col-md-9">
                            <div class="card-body">
                                <h5 class="card-title">{value["name"]}</h5>
                                <p class="card-text" style={{color:"black"}}>{value["desc"]}</p>
                            </div>
                            <div style={{margin:"10px"}}>
                                <button class="btn btn-outline-success m-2">Donate</button>
                                <button class="btn btn-outline-info m-2">Know More</button>
                            </div>
                            </div>
                            </div>
                        </div>)
                    })}
                </div>
            </Fragment>
        );
    }
}
export default AllNGOs;