import TableItem from '../../components/TableItem/TableItem';
import VetnamliOka from '../../assets/images/5.svg';

import './Table.scss';

const tableInfoArr = [
  {
    id: 0,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  },
  {
    id: 1,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  },
  {
    id: 2,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  },
  {
    id: 3,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  },
  {
    id: 4,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  },
  {
    id: 5,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  },
  {
    id: 6,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  },
  {
    id: 7,
    subject: 'Contact Email not Linked',
    updateDay: 'Update 1 day ago',
    customerName: 'Tom Cruise',
    customerDate: 'on 24.05.2019',
    dateDay: 'May 26, 2019',
    dateHour: '6:30 PM',
    status: 'High',
    imglink: VetnamliOka
  }
]

const Table = () => {
  return (
    <div className="table">
      <h3>All tickets</h3>
      {
        tableInfoArr.map(item => (
          <TableItem 
            id={item.id}
            subject={item.subject}
            updateDay={item.updateDay}
            customerName={item.customerName}
            customerDate={item.customerDate}
            dateDay={item.dateDay}
            dateHour={item.dateHour}
            status={item.status}
            imglink={item.imglink}
          />
        ))
      }
    </div>
  )
}

export default Table;