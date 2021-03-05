import './TableItem.scss';

const TableItem = (props) => {
  const {
    subject,
    updateDay,
    customerName,
    customerDate,
    dateDay,
    dateHour,
    status,
    imglink
  } = props;

  return (
    <div className="table-item">
      <div className="item-left">
        <img src={imglink} alt=""/>
        <div className="left-info">
          <h5>{subject}</h5>
          <h6>{updateDay}</h6>
        </div>
      </div>
      <div className="item-right">
        <div className="customer-name">
          <h5>{customerName}</h5>
          <h6>{customerDate}</h6>
        </div>
        <div className="customer-date">
          <h5>{dateDay}</h5>
          <h6>{dateHour}</h6>
        </div>
        <h4>{status}</h4>
        <button className="item-toggle">
          uchta nuqta
        </button>
      </div>
    </div>
  )
}

export default TableItem;