import './Toolbar.scss'

const Toolbar = ({activePage}) => {
  return (
    <div>
      <h2>{activePage}</h2>
    </div>
  )
}

export default Toolbar;