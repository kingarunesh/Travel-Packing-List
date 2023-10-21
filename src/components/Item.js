export default function Item({ item, onPackedHandler, onDeleteHandler }) {
    return (
        <>
            <div className="conatiner__item">
                <div className="conatiner__item--checkbox">
                    <input type="checkbox" value={item.packed} onChange={() => onPackedHandler(item.id)} />
                </div>

                <div className="conatiner__item--text" style={{ textDecoration: `${item.packed ? "line-through" : ""}` }}>
                    {item.title}
                </div>

                <div className="conatiner__item--close-btn" onClick={() => onDeleteHandler(item.id)}>
                    ❌
                </div>
            </div>
        </>
    );
}
