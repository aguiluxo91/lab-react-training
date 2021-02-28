import Rating from "../rating/Rating";

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {
    return(
        <div className="d-flex p-3 rounded-3 justify-content-center m-3 w-75" style={{backgroundColor: "#455eb5"}}>
            <div className="rounded-circle" style={{backgroundImage: `url(${img})`, backgroundSize: "cover", width: "85px", height: "85px"}}></div>
            <div className="ms-3">
                <h3 className="m-0">{name}</h3>
                <Rating className="m-0">{rating}</Rating>
                <span className="m-0">{model} - {licensePlate}</span>
            </div>
        </div>
    );
}

export default DriverCard;