function Random({ min, max, children }) {
    let random;
    switch ((min, max)) {
        case (1, 6):
            random = Math.floor(Math.random() * 6) + 1;
            break;
        case (1, 100):
            random = Math.floor(Math.random() * 100) + 1;
            break;
    }   
    return (
        <div className="container">
            <div className="border w-50">
                {children} {random}
            </div>
        </div>
    );
}

export default Random;