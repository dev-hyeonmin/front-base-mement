"use client";

import { addCart } from "@/redux/cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Params = {
    eventId: string
}

export default function Cart({ eventId }: Params) {
    const dispatch = useDispatch();
    // const selectorState = useSelector((state) => state);

    useEffect(() => {
        dispatch(addCart([{id: '1', name: 'hello event!'}, {id: '22', name: 'second event!'}]));
    }, []);

    return (
        <div>
            temp event !
        </div>
    );
}