export default function Item() {
    return (
        <>
            <div className="conatiner__item">
                <div className="conatiner__item--checkbox">
                    <input type="checkbox" />
                </div>

                <div className="conatiner__item--text">Count Text</div>

                <div className="conatiner__item--close-btn">❌</div>
            </div>
        </>
    );
}
