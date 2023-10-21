import Item from "./Item";

export default function PackingList({ items, onPackedHandler, onDeleteHandler }) {
    return (
        <>
            <main className="conatiner__main">
                <section className="conatiner__main--items">
                    {items.map((item) => (
                        <Item item={item} onPackedHandler={onPackedHandler} onDeleteHandler={onDeleteHandler} key={item.id} />
                    ))}
                </section>

                <section className="conatiner__main--filter">
                    <select>
                        <option value="input">sort by input order</option>
                        <option value="descrition">sort by descrition</option>
                        <option value="packed">sort by packed item</option>
                    </select>

                    <button>Clear all</button>
                </section>
            </main>
        </>
    );
}
