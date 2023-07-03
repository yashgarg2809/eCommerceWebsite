import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import NavPlace from './NavPlace.js'
import BannerCaraousel from './BannerCaraousel.js'
import OurFeatures from './OurFeatures.js';
import SingleItemCard from './SingleItemCard.js';
import DOD from './DOD.js'
import Footer from './Footer.js';
import MenMain from './MenMain.js';
import MyCart from './MyCart.js'
import { useState, useEffect } from 'react';
import SignUpOrLoginPage from './SignUpOrLoginPage.js'

//Importing Images

import beanieCap from './Img/Men/Caps/beani.jpg'
import redCap from './Img/Men/Caps/Red.webp'
import blueCap from './Img/Men/Caps/vlue.jpg'
import blackCap from './Img/Men/Caps/black.jpg'
import blackPants from './Img/Men/Pants/black pants.jpg'
import bluePants from './Img/Men/Pants/Blue.jpg'
import greenPants from './Img/Men/Pants/green.webp'
import brownPants from './Img/Men/Pants/Light Brown.jpg'
import blackShirt from './Img/Men/Shirt/Black Solid.webp'
import blueShirt from './Img/Men/Shirt/Blue.webp'
import brownCheckShirt from './Img/Men/Shirt/Brown Check.webp'
import redCheckShirt from './Img/Men/Shirt/Red Check.webp'
import greenTshirt from './Img/Men/Tshirt/green.jpg'
import mcTShirt from './Img/Men/Tshirt/mc.webp'
import purpleTShirt from './Img/Men/Tshirt/purple.jpg'
import whiteTShirt from './Img/Men/Tshirt/whiye.jpg'
import { waitFor } from '@testing-library/react';

import {
  createBrowserRouter,
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import PlaceOrderPage from './PlaceOrderPage';




function App() {
  let cartKey = 0;
  let initialCart = [];
  

  const removeElement = (arr, num) => {
    const idx = arr.indexOf(num)

    if (idx === -1) {
      return [...arr]
    }

    return arr.filter((el, i) => i !== idx)
  }

  function addItemInCart(event) {
    setCartList(cartList.concat(event));
    // console.log(cartList);
    // console.log(event);
    // console.log(cartList);
  }

  function removeFromCart(e) {
    setCartList(prev => removeElement(prev, e))
  }

  const onCloseCart = () => { setShowCartString("hidden") }
  const onOpenCart = () => { setShowCartString("visible") }
 



  const [showCartString, setShowCartString] = useState("hidden");
  const [mainUserName, setMainUserName] = useState("");
  const [myCurrentOrder, setMyCurrentOrder] = useState(
    {
      username: "",
      orderList: []
    }
  )
  const [cartList, setCartList] = useState(initialCart);
  const [cartObjectList, setcartObjectList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);


  let menItemListSideBar = [
    {
      title: "T-Shirts",
      catId: "category1"
    },
    {
      title: "Shirts",
      catId: "category2"

    },
    {
      title: "Pants",
      catId: "category3"

    },
    {
      title: "Caps",
      catId: "category4"

    }
  ]
  let menItemListShop = [
    {
      category: "T-Shirts",
      catId: "category1",

      itemList: [
        {
          itemId: 1,
          itemName: "Green Tshirt",
          itemPrice: 500,
          itemImg: greenTshirt
        },
        {
          itemId: 2,
          itemName: "Stripes Tshirt",
          itemPrice: 600,
          itemImg: mcTShirt
        },
        {
          itemId: 3,
          itemName: "Purple Tshirt",
          itemPrice: 400,
          itemImg: purpleTShirt
        },
        {
          itemId: 4,
          itemName: "White Tshirt",
          itemPrice: 500,
          itemImg: whiteTShirt
        },
      ]
    },
    {
      category: "Shirts",
      catId: "category2",

      itemList: [

        {
          itemId: 5,
          itemName: "Black Shirt",
          itemPrice: 1000,
          itemImg: blackShirt
        },
        {
          itemId: 6,
          itemName: "Blue sshirt",
          itemPrice: 1000,
          itemImg: blueShirt
        },
        {
          itemId: 7,
          itemName: "Brown Shirt",
          itemPrice: 500,
          itemImg: brownCheckShirt
        },

        {
          itemId: 8,
          itemName: "Red Check shirt",
          itemPrice: 500,
          itemImg: redCheckShirt
        },

      ]
    },
    {
      category: "Pants",
      catId: "category3",

      itemList: [
        {
          itemId: 9,
          itemName: "Black Pants",
          itemPrice: 2000,
          itemImg: blackPants
        },
        {
          itemId: 10,
          itemName: "Blue Pants",
          itemPrice: 2000,
          itemImg: bluePants
        },
        {
          itemId: 11,
          itemName: "Green Pants",
          itemPrice: 2000,
          itemImg: greenPants
        },
        {
          itemId: 12,
          itemName: "Brown Pants",
          itemPrice: 2000,
          itemImg: brownPants
        },
      ]
    },
    {
      category: "Caps",
      catId: "category4",

      itemList: [

        {
          itemId: 13,
          itemName: "Beanie Cap",
          itemPrice: 500,
          itemImg: beanieCap
        },
        {
          itemId: 14,
          itemName: "Blue Cap",
          itemPrice: 500,
          itemImg: blueCap
        },
        {
          itemId: 15,
          itemName: "Red Cap",
          itemPrice: 500,
          itemImg: redCap
        },
        {
          itemId: 16,
          itemName: "Black Cap",
          itemPrice: 500,
          itemImg: blackCap
        },
      ]
    }
  ]

  

  useEffect(() => {
    let x = 0;
    cartObjectList.map((item) => {
      x += item.itemPrice;
    })
    setTotalAmount(x);
  }, [cartObjectList])

  useEffect(() => {

    // console.log(cartList);
    let emptyList = []
    cartList.forEach(cel => {
      menItemListShop.forEach(element => {
        // console.log("Checking for ",element)
        element.itemList.forEach(e => {
          if (cel == e.itemId) {
            emptyList.push(e);
          }
        });
      })
    });
    // console.log(emptyList);
    setcartObjectList(emptyList);
  },
    [cartList])


  useEffect( () =>{
    // console.log(myCurrentOrder)
  },[myCurrentOrder])



  return (
    <div className='bg-white m-0'>


      <BrowserRouter>
        <Navbar cartObjectList={cartObjectList} onOpenCart={onOpenCart} />
        <NavPlace mainUserName={mainUserName} />
        <Routes>
          <Route exact path="/" element={<>< BannerCaraousel /><DOD /></>}></Route>
          <Route exact path='/men' element={<MenMain sideList={menItemListSideBar} shopList={menItemListShop} addFunction={addItemInCart} />}></Route>
          <Route exact path='/userLogin' element={<SignUpOrLoginPage mainUserName={mainUserName} setMainUserName={setMainUserName} />}></Route>
          {/* <Route exact path = '/placeOrder' element = {<PlaceOrderPage order = {myCurrentOrder} />}></Route> */}
        </Routes>
        <MyCart order = {myCurrentOrder} setCartObjectList={setCartList} setMyCurrentOrder= {setMyCurrentOrder} mainUserName = {mainUserName} totalAmount={totalAmount} onCloseCart={onCloseCart} showCartString={showCartString} cartObjectList={cartObjectList} removeFromCart={removeFromCart} cartKey={cartKey} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
