import Dashboard from './components/screens/Dashboard';
import Contactus from './components/screens/Contactus';
import Subsicrition from './components/screens/Subsicrition';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
export default function() {
  const Data = [
    {
      Id: 0,
      label: "Dashboard",
      img: <DashboardIcon/>,
      component: <Dashboard />,
      path: "/dashboard"
    },
    {
      Id: 1,
      label: "Contactus",
      img: <PhonePausedIcon/>,
      component: <Contactus />,
      path: "/contactus"
    }, {
      Id: 2,
      label: "Subsicrition",
      img: <SubscriptionsIcon/>,
      component: <Subsicrition />,
      path: "/subsicrition"
    }
  ]
  return Data
}
