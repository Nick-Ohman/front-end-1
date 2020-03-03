import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function RegisterForm(props) {
    const [userCredentials, setCredentials] = useState({
        username: "",
        password: "",
        
    });

    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);

        axios.post("/register",userCredentials,  {headers: {"Content-Type": "application/json" }})
            .then(res => {
                console.log(res);
                props.history.push("/");
            })
            .catch(err => console.log(err))
    }

    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    

    return (
        

        <div className="container App">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h2 className="register-h2">Sign Up </h2>
                    </div>
                    <div className="card-body">
                        <Form onSubmit={submitHandler}>
                            <div className="register">   
                               
                                <input
                                type="text"
                                name="username"
                                value={userCredentials.username}
                                onChange={changeHandler}
                                placeholder="Username"
                                required
                                />
                            </div>
                            <div className="register"> 
                                    
                                    <input
                                    type="password"
                                    name="password"
                                    value={userCredentials.password}
                                    onChange={changeHandler}
                                    placeholder="Password"
                                    required
                                    />
                            </div>
                           
                           
                            <div className="register">
						        <input type="submit" value="Signup" className="btn float-right register_btn"/>
					        </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
