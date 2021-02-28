function Random({ min, max, children }) {
    const random = Math.floor(Math.random() * max ) + min; 
    return (
        <div className="container">
            <div className="border w-50">
                {children} {random}
            </div>
        </div>
    );
}

export default Random;