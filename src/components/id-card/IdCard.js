function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="container border mb-3 p-1">
        <div className="d-flex flex-row">
            <div className="me-2">
                <img src={picture} alt=""/>
            </div>
            <div>
                <p className="m-0"><b>First Name: </b>{firstName}</p>
                <p className="m-0"><b>Last Name: </b>{lastName}</p>
                <p className="m-0"><b>Gender: </b>{gender}</p>
                <p className="m-0"><b>Height: </b>{height}</p>
                <p className="m-0"><b>Birth: </b>{birth.toString()}</p>
            </div>
        </div>
    </div>
  );
}

export default IdCard;
