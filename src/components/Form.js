export default function Form({ total, setTotal, title, setTitle, addItemHandler }) {
    return (
        <>
            <div className="conatiner__form">
                <form className="conatiner__form">
                    <div className="conatiner__form--input">
                        <label>What you need for your trip?</label>

                        <select value={total} onChange={(e) => setTotal(Number(e.target.value))}>
                            {Array.from({ length: 20 }, (value, index) => (
                                <option value={index + 1} key={index}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>

                        <input type="text" placeholder="Item..." value={title} onChange={(e) => setTitle(e.target.value)} />
                        <button onClick={addItemHandler}>Add</button>
                    </div>
                </form>
            </div>
        </>
    );
}
