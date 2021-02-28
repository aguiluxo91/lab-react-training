function Rating({ children, max }) {
    const fullStars = Math.round(Number(children));
    const emptyStars = max - fullStars;

    return(
        <div className="fs-3">{"★".repeat(fullStars)}{"☆".repeat(emptyStars)}</div>
    );
}


Rating.defaultProps = {
    max: 5
}

export default Rating;