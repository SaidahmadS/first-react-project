import './SidebarButton.scss'

const SidebarButton = ({ title, icon, active, onClick }) => {
  console.log(active);
  return (
    <button className={`sidebar-btn ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="btn-icon">
        {icon}
      </div>
      <span>{title}</span>
    </button>
  )
}

export default SidebarButton;