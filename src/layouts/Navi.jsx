import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../store/actions/userActions";


export default function Navi() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.cart)
  
  const {userState} = useSelector(state => state.userJSON)

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const history = useHistory()
  function handleSignOut() {
    const userArray = {}
    dispatch(setUser(null))
    setIsAuthenticated(false)
    history.push("/")

  }

  function handleSignIn() {
    var username = prompt("Kullanıcı Adı Giriniz");
    try{
      const userArray = [
        {
          id:1,
          username:username,
          imgUrl:"https://i.pinimg.com/564x/56/d3/07/56d307873be7a50514a99cf676623d5d.jpg"
        }
      ]
      dispatch(setUser(userArray))
      setIsAuthenticated(true)
    }
    catch(error){
      console.log(error)
    }

  }


  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated && userState.length > 0 ?<SignedIn signOut={handleSignOut} bisey="1"/>
            :<SignedOut signIn={handleSignIn}/>
            }  
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
