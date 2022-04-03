import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import swal from 'sweetalert';


const Home = () => {
    const [phones, setPhone] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
            .then(res => res.json())
            .then(data => setPhone(data.data))
    }, [])
    // console.log(cart);

    const handleAddToCart = (product) => {
        if (cart.indexOf(product) !== -1) {
            swal({
                title: "Opps!!",
                text: "already added",
                icon: "warning",
            });
        }
        else {
            if (cart.length > 3) {
                swal({
                    title: "Opps!!",
                    text: "you can't add cart more then 4 products",
                    icon: "warning",
                });
            }
            else {
                const newCart = [...cart, product]
                setCart(newCart);
            }
        }
    }

    const handleRemove = (product) => {
        const removed = cart.filter(p => p.slug !== product.slug);
        setCart(removed)
    }

    return (
        <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1 my-3'>
            <div className="phones-container grid lg:col-span-2 order-1 md:col-span-2 gap-4 order-1 sm:grid-cols-1 my-3 order-2">
                <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1 my-3'>
                    {
                        phones.map(ph => <Phone phone={ph} key={ph.id} handleAddToCart={handleAddToCart}></Phone>)
                    }
                </div>
            </div>
            <div className="cart bg-red-100 sm:order-1 lg:order-2 md:order-2">
                <h1 className='text-4xl p-2 center'>Cart</h1>
                {cart.length > 3 ? <h1>good job!! thanks for shopping</h1> : <h1>you have added {cart.length} product</h1>}
                {
                    cart.map(c => <Cart handleRemove={handleRemove} cart={c} ></Cart>)
                }

            </div>
        </div>
    );
};
// swal("Good job!", "You clicked the button!", "success")

export default Home;