
function NumbersTable({ limit }) {
    const boxes = []
    for(let i = 0; i < limit; i++) {
        boxes.push(i)
    }

    return (
        <div className="row">
            {boxes.map((boxes, i) => {
                return <div key={i} className={`${boxes % 2 === 0 && 'bg-danger'} p-3 col-3 border border-dark d-flex justify-content-center align-items-center`}>{boxes}</div>
            })}
        </div>
    )
}

export default NumbersTable;