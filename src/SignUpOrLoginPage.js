import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AllOrdersMainCard from './AllOrdersMainCard'
// import axios from 'axios'


const SignUpOrLoginPage = (props) => {

  const navigate = useNavigate()


  const [records, setRecords] = useState([])
  const [loginRecord, setLoginRecord] = useState({
    username: "",
    password: ""
  })

  const [newRecordSignUp, setNewRecordSignUp] = useState(
    {
      username: "",
      password: ""
    }
  )

  const [allOrders, setAllOrders] = useState([
    // Order_Id: 1,
    // orderString: "",
    // username: ""

  ]);



  useEffect(() => {


    const fetchAllRecords = async e => {
      try {
        const res = await axios.get("http://localhost:8800/users")
        setRecords(res.data)
      } catch (err) {
        console.log(err);
      }
    }


    const fetchAllOrders = async e => {
     
      try {
        const res = await axios.get("http://localhost:8800/allOrders",{
          params:{
            username:props.mainUserName
          }
        })
        // let k = res.data.filter((item) => item.username === 'Aditya')
        setAllOrders(res.data)
        console.log(res.data, 'resdata')
      } catch (err) {
        console.log(err);
      }

    }

    fetchAllRecords()
    fetchAllOrders()
  }, [])

  useEffect(()=>{
    console.log(allOrders.length)
  },[allOrders])







  if (props.mainUserName === "") {


    const handleChangeSignUp = (e) => {
      setNewRecordSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }


    const handleClickSignUp = async e => {
      e.preventDefault();
      let flag = 0;
      records.map((item) => {
        if (item.username === newRecordSignUp.username) {
          alert("Username already registered")
          flag = 1;
          return;
        }
      })
      if (flag === 1) return;
      try {
        await axios.post("http://localhost:8800/users", newRecordSignUp)
        alert("Registed User.Now Please Login")
        navigate("/")
      }
      catch (err) {
        console.log(err)
      }
    }

    const handleChangeLogin = (e) => {
      setLoginRecord((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClickLogin = async e => {
      e.preventDefault();
      let flag = 0;
      let userName = "hi";
      records.map((item) => {
        if (item.username === loginRecord.username) {
          if (item.password === loginRecord.password) {
            flag = 1;
            userName = loginRecord.username;
            return;
          }
        }
      })

      if (flag === 1) {
        props.setMainUserName(userName);
        navigate("/")
      }
      else {
        alert("Username or password is incorrect")
      }
    }


    return (
      <div className="d-flex flex-row">

        <div className="container text-center border w-50 p-2">
          <h1>
            Sign up
          </h1>
          <div className="form">
            <label htmlFor="userNameSignUpBox" className='form-label fw-bold'>Username: </label>
            <input type="text" className="form-control" id="userNameSignUpBox" placeholder='Username' onChange={handleChangeSignUp} name="username" />
            <br />
            <label htmlFor="passWordSignUpBox" className='form-label fw-bold'>Password: </label>

            <input type="text" className="form-control" id="passWordSignUpBox" placeholder='Password' onChange={handleChangeSignUp} name="password" />
            <button className='btn btn-primary btn-sm m-2' onClick={handleClickSignUp}>Submit</button>
          </div>
        </div>

        <div className="login text-center border w-50 p-2">
          <h1>
            Login
          </h1>
          <div className="form">
            <label htmlFor="userNameLoginBox" className='form-label fw-bold'>Username: </label>

            <input type="text" className="form-control" id="userNameLoginBox" placeholder='Username' onChange={handleChangeLogin} name="username" />
            <br />
            <label htmlFor="passWordLoginBox" className='form-label fw-bold'>Password: </label>

            <input type="text" className="form-control" id="passWordLoginBox" placeholder='Password' onChange={handleChangeLogin} name="password" />
            <button className='btn btn-primary btn-sm m-2' onClick={handleClickLogin}>Submit</button>
          </div>
        </div>


      </div>
    )
  }


  


  else {
    const logOut = () =>{
      props.setMainUserName("");
      navigate("/")
      alert("Logged out")
    }
    

    return (
      <div>
        <div className="container-fluid">
          <h3>Hello {props.mainUserName}...</h3><br></br><h2>Your Orders are here:</h2>
        </div>

        <div className="container-fluid">

        {
          <AllOrdersMainCard allOrders = {allOrders}/>
        }

        <button className="btn btn-danger m-1" onClick={() =>{
          logOut()
        }}>Log Out</button>





        </div>
      </div>
    )
  }

}


export default SignUpOrLoginPage
