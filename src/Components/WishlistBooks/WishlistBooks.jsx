import { useEffect, useState } from "react";
import {getWishlist } from "../../Utils";
import Wishlist from "../Wishlist/Wishlist";

const WishlistBooks = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedBook = getWishlist()
        setWishlist(storedBook)
    }, [])
    return (
        <div>
            {
                wishlist.map(wish => <Wishlist key={wish.id} wish={wish}></Wishlist>)
            }            
        </div>
    );
};

export default WishlistBooks;