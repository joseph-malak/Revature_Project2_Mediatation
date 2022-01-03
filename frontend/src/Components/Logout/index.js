import React, {useState} from "react"
import LoginPage from "../../Pages/LoginPage";


const Logout = () => {

    // const user = LoginPage.user;
    // console.log(user);

    // const User =  user => {
    //     console.log(user)
    // }

    // const [user, setUser] = useState({
    //     email: '',
    //     password : ''
    // });
    const onClickHandler = (e) =>{
<LoginPage Logout="Logout" />
    }
    return (
        <div>
           <button className="" onClick = {onClickHandler}>Logout</button>
        </div>
    )

}

export default Logout