import React, { useState } from 'react';
import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';
import './style.css';
import maps from '../../icons/icons8-google-maps-48.png';
import drive from '../../icons/icons8-google-drive-48.png';
import cal from '../../icons/icons8-google-calendar-48.png';
import book from '../../icons/icons8-google-books-48.png';
import photo from '../../icons/icons8-google-photos-48.png';
import plus from '../../icons/icons8-plus-24.png';

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [visible,setVisible]=useState(true);

  return (
    <div>
    <div  className={`sidebar ${visible ? 'nothidden' : 'hidden'}`}>
      <div className="app">
        <img src={maps} alt="" />
      </div>
      <div className="app">
        <img src={drive} alt="" />
      </div>
      <div className="app">
        <img src={cal} alt="" />
      </div>
      <div className="app">
        <img src={book} alt="" />
      </div>
      <div className="app">
        <img src={photo} alt="" />
      </div>
      <div className="app">
        <img src={plus} alt="" />
      </div>
    </div>
   
        <button className='sidebar-toggle sidebar' onClick={()=>setVisible(!visible)}>
        <span className='material-symbols-outlined'>
          {visible?<FiChevronRight />:<FiChevronLeft />}
        </span>
        </button>
        
    </div>
    
  );
};

export default Sidebar;
