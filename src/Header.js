import React from 'react';

const Header=function()
{
    const headerStyle={textAlign: 'center', padding: 20, color: 'orange',fontWeight:'bold',fontSize:'25px'};
    
    return(
        <div>
        <div className="header"style={headerStyle} >
        NBA REPO
        </div>
        
      </div>

    )
}

export default Header;