import Item from "./Item";

export default function PackingList() {
    return (
        <>
            <main className="conatiner__main">
                <section className="conatiner__main--items">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
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
