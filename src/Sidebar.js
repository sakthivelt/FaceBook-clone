import React,{useState} from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar({user}) {
    console.log(user.photoURL);
    const [User,setimage]=useState(user);
    return (
        <div className="sidebar">
            <SidebarRow title={User.displayName} src={User.photoURL}/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Page' />
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatBubbleOutlineIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreIcon} title='More'/>
        </div>
    );
}

export default Sidebar;
