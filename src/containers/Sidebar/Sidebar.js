
import { Link } from 'react-router-dom'

import SideburButton from '../SidebarButton/SidebarButton'
import {
  OverviewIcon,
  TicketsIcon,
  IdeasIcon,
  ContactsIcon,
  AgentsIcon,
  ArticlesIcon,
  SettingsIcon,
  SubscriptionIcon
} from '../../assets/icons/icons'

import SidebarLogoIcon from '../../assets/images/logo.svg'
import './Sidebar.scss'

const Sidebar = ({activePage, setActivePage}) => {

  return (
    <div className="sidebar">
      <a href="javacript:void(0)" className="sidebar-logo">
          <img src={SidebarLogoIcon} alt=""/>
          <div>
            <h2>Dashboard Kit</h2>
          </div>
      </a>

      <Link to="/overview">
        <SideburButton
          title="Overview"
          icon={<OverviewIcon/>}
          active={activePage == 'overview'}
          onClick={() => setActivePage('overview')}
        />
      </Link>

      <Link to="/tickets">
        <SideburButton
          title="Tickets"
          icon={<TicketsIcon/>}
          active={activePage == 'tickets'}
          onClick={() => setActivePage('tickets')}
        />
      </Link>

      <Link to="/ideas">
        <SideburButton
          title="Ideas"
          icon={<IdeasIcon/>}
          active={activePage == 'ideas'}
          onClick={() => setActivePage('ideas')}
        />
      </Link>

      <SideburButton title="Contacts" icon={<ContactsIcon/>} onClick={() => setActivePage('contacts')}/>
      <SideburButton title="Agents" icon={<AgentsIcon/>} onClick={() => setActivePage('agents')}/>
      <SideburButton title="Articles" icon={<ArticlesIcon/>} onClick={() => setActivePage('articles')}/>
      <SideburButton title="Settings" icon={<SettingsIcon/>} onClick={() => setActivePage('settings')}/>
      <SideburButton title="Subscription" icon={<SubscriptionIcon/>} onClick={() => setActivePage('subscription')}/>
    </div>
  )
}

export default Sidebar;