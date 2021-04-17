import React, { Fragment } from 'react';

class NGOLoginForm extends React.Component{

    constructor(){
        super();
    }
    render(){
        return(
            <Fragment>
                <div class="card" style={{width:"40vw",margin:"auto"}}>
                <div style={{width:"100%",background: "linear-gradient(90deg, rgba(207,246,58,1) 3%, rgba(156,237,223,1) 63%, rgba(0,212,255,1) 100%)",margin:"12px"}}>
                            <h5 class="card-title">NGO Login</h5>
                            <h6 class="card-subtitle mb-2 text-muted"></h6>
                        </div>
                    <div class="card-body">
                        <form style={{margin:"auto"}}>
                        <div class="form-group">
                            <label>Email</label>
                            <input style={{width:"30vw"}} type="email" class="form-control" placeholder="Email of your NGO"/>
                        </div>
                        <div class="form-group">
                            <label>Create a password</label>
                            <input style={{width:"30vw"}} type="password" class="form-control" placeholder="Create a password"/>
                        </div>
                        <button type="submit" class="btn btn-outline-info">Login</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default NGOLoginForm;