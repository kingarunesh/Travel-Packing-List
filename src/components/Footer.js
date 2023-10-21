export default function Footer({ items }) {
    const length = items.length;
    const packedLength = items.filter((item) => item.packed === true).length;
    const percentage = (packedLength / length) * 100;

    return (
        <>
            <footer className="conatiner__footer">
                {length === 0 && <p>Add new item for you trip 🚀</p>}

                {length > 0 && percentage !== 100 ? (
                    <p>
                        You have {length} items on your list, and you have already packed {packedLength} ({Math.round(percentage)}
                        %)
                    </p>
                ) : (
                    ""
                )}

                {percentage === 100 && <p>You got everything, ready to go ✈️</p>}
            </footer>
        </>
    );
}
