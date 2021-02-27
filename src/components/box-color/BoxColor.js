
function BoxColor({ r, g, b, children }) {
    return(
        <div className="container">
            <div className="border border-dark w-50 text-center fw-bold mb-3" style={{backgroundColor: `rgb( ${r}, ${g}, ${b})`}}>
                {children}
            </div>
        </div>
    );
}

export default BoxColor;