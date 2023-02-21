import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { Grid } from '@mui/material'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';

// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
// import Paper from '@mui/material/Paper';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
const { Header, Content, Footer, Sider } = Layout;
export default function SidebarMaster() {
  const [activeMenu, setActiveMenu] = useState('/master/location');

  const handleMenuClick = (path: SetStateAction<string>) => {
    setActiveMenu(path);
  };
  return (


    <><Sider style={{ position: 'fixed',backgroundColor: 'gray', width: '100%', height: '100%' }} className="h-screen">
      <h4 className="font-semibold ml-3" style={{ fontFamily: 'sans-serif' }}>MENU</h4>
      {/* <nav className="sidebar"> */}
      <ul>
        <li>
          <Link href="/master/location">
            <span
              className={`px-3 py-2 block hover:bg-gray-700 ${activeMenu === '/master/location' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => handleMenuClick('/master/location')}
            >
              Location
            </span>
          </Link>
        </li>
        <li>
          <Link href="/master/policy">
            <span
              className={`px-3 py-2 block hover:bg-gray-700 ${activeMenu === '/master/policy' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => handleMenuClick('/master/policy')}
            >
              Policy
            </span>
          </Link>
        </li>
        <li>
          <Link href="/master/cagro">
            <span
              className={`px-3 py-2 block hover:bg-gray-700 ${activeMenu === '/master/cagro' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => handleMenuClick('/master/cagro')}
            >
              Category Group
            </span>
          </Link>
        </li>
        <li>
          <Link href="/master/prit">
            <span
              className={`px-3 py-2 block hover:bg-gray-700 ${activeMenu === '/master/prit' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => handleMenuClick('/master/prit')}
            >
              Price Items
            </span>
          </Link>
        </li>
        <li>
          <Link href="/master/serviceTask">
            <span
              className={`px-3 py-2 block hover:bg-gray-700 ${activeMenu === '/master/sserviceTask' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => handleMenuClick('/master/serviceTask')}
            >
              Service Task
            </span>
          </Link>
        </li>
      </ul>
      {/* </nav> */}
    </Sider>
    </>

  )
}
