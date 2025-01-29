import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const ListCart = ({data})=>{
    return (<div class="w-48 bg-yellow-100 m-2 text-xl">
        <h2 className="font-bold">{data?.title}</h2>
    </div>)
}

const Cart = ()=>{
    const cartItems = useSelector(store=> store.cart.items);
    const dispatch = useDispatch();


const handleClearCart = ()=>{
    dispatch(clearCart())
}
    return(
        <div class="flex flex-wrap">
        {cartItems.length > 0 && <button className="w-48 bg-red-300 m-2 text-xl font-bold" onClick={()=>handleClearCart()}>ClearCart</button>}
        {cartItems.length > 0 ? (
          cartItems?.map((data, index) => {
            return (
                <ListCart key={index} data={data}  />
            );
          })
        ) : (
          <h1 className="w-48 bg-yellow-100 m-2 text-xl font-bold">Nothing in cart!</h1>
        )}
      </div>
    )
}

export default Cart;

