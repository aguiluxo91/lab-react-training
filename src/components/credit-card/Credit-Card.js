function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let cardType;
  switch (type) {
    case 'Visa':
      cardType = '/img/visa.png';
      break;
    case 'Master Card':
      cardType = '/img/master-card.svg';
      break;
  }

  const spacedNumber = number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
  const numberToDisplay = spacedNumber.replace(/\d(?=.{4})/g, '•');

  return (
    <div
      className="d-flex flex-column justify-content-between w-75 border rounded me-3"
      style={{ backgroundColor: bgColor, color }}
    >
      <header className="d-flex justify-content-end">
        <img className="w-25 p-3" src={cardType} alt="" />
      </header>
      <section>
        <p className="text-center fs-4">{numberToDisplay}</p>
      </section>

      <footer className="p-3 d-flex flex-column align-items-start">
        <div className="d-flex">
          <p className="me-4 mb-0">Expires {expirationMonth}/{expirationYear}</p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </footer>
    </div>
  );
}

export default CreditCard;
