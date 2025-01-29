import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/contact";
import { Outlet } from "react-router-dom";
import Collection from "./components/Collection";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const InstaMart = lazy(()=>import("./components/InstaMart")); //lazy import

// const Header = () => (
//   <div id="nav-bar">
//     <img
//       id="logo"
//       alt="logo"
//       src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
//     />
//     <ul className="nav-items">
//       <li>Home</li>
//       <li>Contacts</li>
//       <li>About</li>
//     </ul>
//   </div>
// );

// const Card = ({ name, image, rating }) => (
//   <div className="card">
//     <img alt="card-img" src={image?.url} />
//     <h1>{name}</h1>
//     <h2>{rating?.aggregate_rating}</h2>
//   </div>
// );

// const Body = () => (
//   <div id="card-body">
//     {swiggyData.map((restaurant) => {
//       return <Card {...restaurant?.info} key={restaurant?.info?.resId} />;
//     })}
//   </div>
// );

// const Footer = () => (
//   <div>
//     <h1>footer</h1>
//   </div>
// );



const Layout = () => {
  const [user, setUser] = useState({
    name: "Sujay",
    mail: "sujay@gmail.com"
  })


  return (
    <Provider store={store}>
      <UserContext.Provider value={{user:user, setUser:setUser}}>
        <Header/>
        <Outlet/>
        <Footer/>
    </UserContext.Provider>
    </Provider>
  )
};

const routerApp =  createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        errorElement: <Error/>
      },
      {
        path: "/about",
        element: <About/>,
        errorElement: <Error/>,
        children:[
          {
            path: "profile",
            element: <Profile/>,
            errorElement: <Error/>
          },
        ]
      },
      {
        path: "/contact",
        element: <Contact/>,
        errorElement: <Error/>
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}> <InstaMart/> </Suspense>,
        errorElement: <Error/>,
      },
      {
        path: "/collections/:collectionId",
        element: <Collection/>,
        errorElement: <Error/>
      },
      {
        path: "/cart",
        element: <Cart/>,
        errorElement: <Error/>
      }
    ]
  },
  
  //we can write other routes here 
]);

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(<Layout/>);

root.render(<RouterProvider  router={routerApp} />);

// //react element
// const collage = (
//     <h2>NITK</h2>
// )
// //react function
// const city = () => (
//     <h2>Surathkal, Karnataka</h2>
// )
// //functional component
// const Course = () => (
//     <h2>MCA</h2>
// )

// const MyName = () => (
//     <>
//         {/* inline style */}
//         <h1 style={{backgroundColor: "blue"}}>Sujoy</h1>
//         <h1 className="lastname">Lande</h1>
//         {collage}
//         {city()}
//         <Course/>

//         {/*because altimately its a function so we can call it */}
//         {Course()}
//     </>
// );
