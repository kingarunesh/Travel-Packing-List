import { useState } from "react";

import Item from "./Item";

export default function PackingList({ items, onPackedHandler, onDeleteHandler, onClearHandler }) {
    const [sort, setSort] = useState("input");

    let sortedItems;

    //  input sort
    if (sort === "input") sortedItems = items;

    //  description sort
    if (sort === "description") {
        const result = items.slice().sort((a, b) => a.title.localeCompare(b.title));
        sortedItems = result;
    }

    //  packed sort
    if (sort === "packed") {
        const result = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
        sortedItems = result;
    }

    return (
        <>
            <main className="conatiner__main">
                <section className="conatiner__main--items">
                    {sortedItems.map((item) => (
                        <Item item={item} onPackedHandler={onPackedHandler} onDeleteHandler={onDeleteHandler} key={item.id} />
                    ))}
                </section>

                <section className="conatiner__main--filter">
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="input">sort by input order</option>
                        <option value="description">sort by descrition</option>
                        <option value="packed">sort by packed item</option>
                    </select>

                    <button onClick={onClearHandler}>Clear all</button>
                </section>
            </main>
        </>
    );
}
