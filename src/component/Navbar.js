import React from 'react'
import '../index.css'


class Navbar extends React.Component {

    render(){
        return (
            <div className='nav' >
                <div className="search-container">
                    <input/>
                    <button id="search-btn">Search</button>
                </div>
             
            </div>
          );

    }
  
}

export default Navbar;
