import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";

import { useState } from "react";

export default function App() {
    const [total, setTotal] = useState(1);
    const [title, setTitle] = useState("");
    const [items, setItems] = useState([]);

    const addItemHandler = function (e) {
        e.preventDefault();

        //  new item object
        const newItem = {
            id: Date.now(),
            packed: false,
            title,
            total,
        };

        //  add new item to list
        setItems((items) => [...items, newItem]);

        //  clear input
        setTotal(1);
        setTitle("");
    };

    const packedHandler = function (id) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
    };

    const deleteHandler = function (id) {
        setItems((items) => items.filter((item) => item.id !== id));
    };

    const clearHandler = function () {
        const confirm = window.confirm("Are you sure to delete all items from your list?");
        confirm && setItems([]);
    };

    return (
        <>
            <div className="conatiner">
                <Header />
                <Form total={total} setTotal={setTotal} title={title} setTitle={setTitle} addItemHandler={addItemHandler} />
                <PackingList
                    items={items}
                    onPackedHandler={packedHandler}
                    onDeleteHandler={deleteHandler}
                    onClearHandler={clearHandler}
                />
                <Footer items={items} />
            </div>
        </>
    );
}
