export default function Form() {
    return (
        <>
            <div className="conatiner__form">
                <form className="conatiner__form">
                    <div className="conatiner__form--input">
                        <label>What you need for your trip?</label>

                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <input type="text" placeholder="Item..." />

                        <button>Add</button>
                    </div>
                </form>
            </div>
        </>
    );
}
