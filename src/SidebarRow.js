import React from 'react';
import './SidebarRow.css';
import Avatar from '@material-ui/core/Avatar';

function SidebarRow({src,Icon,title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            {title && <h4>{title}</h4>}    
        </div>
    )
}

export default SidebarRow;
