import React, {useState} from "react"
import './style.css';
import axios from 'axios';
import MeditationListPage from "../MeditationListPage";
import NavbarHome from "../../Components/NavbarHome";
import { useDispatch } from 'react-redux';
import Logout from "../../Components/Logout";


const LoginPage = (props) => {

    if(props.Logout == "Logout"){
        setUser({
           email: '',
           password : ''
        })
    }

  const [user, setUser] = useState({
        email: '',
        password : ''
    });

    // states for checking the errors
    const [error, setError] = useState(false);

    const [userResponse, setUserResponse] = useState({
        id: 0,
        name: '',
        email: 'initialemailcoooliomon',
        password : 'initialpasswordcooooooliomon'
    });

    const dispatch = useDispatch();

    const setUserHandler = () => {
        dispatch({type: userResponse})
    }


  const submitHandler = (e) => {
        e.preventDefault();
        console.log(user);
        axios.post("http://localhost:9001/users/login", user)
        .then((response) => {
            console.log(response.data);
            setUserResponse({
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                password: response.data.password
            });

            // console.log("user Response ====== ");
            // console.log(userResponse);
            // setUserHandler();
            // if (response.data.email === user.email && response.data.password === user.password) {
            //     // logged in
            //     console.log("Successfully Logged In " + userResponse.name);
            //     <MeditationListPage />
            // }
            // else {
            //     console.log('check username password');
            // }
            //(response.data.email === user.email && response.data.password === user.password ? console.log("Successfully Logged In " + userResponse.name) : console.log('check username password'));
            // (response.data.email === user.email && response.data.password === user.password ? <MeditationListPage /> : console.log('check username password'));

            //console.log(userResponse);
            
        }).catch((error) => {
            console.log(error)
        })
    };

    const checkFieldsHandler = (e) => {
            if (userResponse.email !== user.email || userResponse.password !== user.password) {
                setError(true);
            }
      }

    const displayMessage = () => {
        if (error){  // show error message if error is true
          return (
              <div
                  className="error"
                  style={{
                      display: error ? "" : "none",
                  }}>
                      <h5 style={{
                              color: "black",
                              backgroundColor: "red",
                      }}>Please enter your correct username and password.</h5>
              </div>
        )
        }
    }


    function onChangeHandler(event){
        //console.log(event.target.name)
        setUser({...user,
            [event.target.name]: event.target.value
        })
    }


    if (userResponse.email === user.email && userResponse.password === user.password) {
        // logged in
        console.log("userResponse MeditationListPage")
        console.log(userResponse);
        setUserHandler();
        return(<MeditationListPage user = {userResponse}/>);
    }
    else {
        //console.log('check username password');

        return (
            <div> <NavbarHome/>
                <form onSubmit={submitHandler}>
                    <div className = "registrationWrapper ">  
                        <section className="vh-100 gradient-custom">
                            <div className="container py-5 h-100">
                                {/* {user.email} , {user.password} */}
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-9 col-lg-5 col-xl-5">
                                        <div className="card bg-primary text-white">
                                            <div className="card-body p-5 text-center">

                                                <div className="mb-md-5 mt-md-4 pb-5">
                                                    {/*{(error != "") ? (<div className="error">{error}</div>) :""}*/}
                                                    <h2 className="fw-bold mb-2 text">Login Form</h2>
                                                    <p className="text-white-50 mb-5">Please enter your email and password</p>

                                                    <div className="form-outline form-white mb-4">
                                                        <input type="text" id="username" className="form-control form-control-lg" name="email" onChange = {onChangeHandler} value ={user.email}/>
                                                        <label className="form-label" htmlFor="username" >Email</label>
                                                    </div>

                                                    <div className="form-outline form-white mb-4">
                                                        <input type="password" id="password" className="form-control form-control-lg" name="password" onChange = {onChangeHandler} value ={user.password}/>
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                    </div>

                                                    <br />
                                                    <button className="btn btn-outline-primary btn-lg px-10" onClick={checkFieldsHandler} type="submit" value = "login">Login</button>
                                                    <br />
                                                    <br />
                                                    <div className="messages">
                                                        {displayMessage()}
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </form>
                </div>
            )
    }

}

export default LoginPage;