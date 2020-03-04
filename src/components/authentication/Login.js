import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";

    const Login = props => {
        const [login, setLogin] = useState({username: "", password: ""})
    
        const handleChange = e => {
            setLogin({...login, [e.target.name]: e.target.value})
        }
    
        const handleSubmit = e => {
            e.preventDefault();
            setLogin({username: "", password: ""})
            
            axiosWithAuth().post("/login",)
           
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("id", res.data.id)
                this.props.history.push('/protected');
              
            })
            .catch(err => console.log(err))
            setLogin({username: "", password: ""})
        }

    return (
        <div className="container App">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h2 className="login-h2">Login </h2>
                    </div>
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <div className="username">   
                                
                                <input
                                className="input"
                                type="text"
                                name="username"
                                value={login.username}
                                onChange={handleChange}
                                placeholder="Username"
                                />
                            </div>
                            <div className="password"> 
                                   
                                    <input
                                    className="input"
                                    type="password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    />
                            </div>
                                    
                            <div className="log">
						        <input className="input" type="submit" value="Login" className="button"/>
					        </div>
                        </Form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                        <Message>
                            Don't have an account? <Link to='/signup'>Signup Now</Link>
                        </Message>
                        </div>
			        </div>
                </div>
            </div>
        </div>
    )
}

export default Login;