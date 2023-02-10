import React from 'react';
import { Link } from 'react-router-dom';
import lore from '../Images/lore.jpg'

const Lore = () => {
    return (
        <div id='lore' className='my-60'>
            
            {/* The button to open modal */}
          <label htmlFor="lore-modal-6" className=" px-16 md:px-28 py-4 rounded-md border border-yellow-400 cursor-pointer textGradient hover:text-black  hover:bg-yellow-400 text-3xl font-FredokaOne">Lore</label>
          

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="lore-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle  text-white">
            <div className="modal-box bg-[#150529] border  ">
              <img src={lore} alt="" />
              <h3 className="text-lg">Lore</h3>
              <p className="py-6 text-white text-center md:text-start font-Poppins text-md">Long ago the nextlights of planet Suiland lived in harmony with the essence that forged them. Theirs was the most peaceful planet of their dimension but all went to ruin on the day that darkness arrived.
              Its sudden presence was unexplainable. The nextlights were shaken with fear for this massive thing they didn't understand. They were driven into caves and holes underground, abandoning their homes and towers as darkness encroached on their land... 
              <Link to='https://medium.com/@thelightonsui/lore-aa317a3b4c8a' target="_blank" className='text-md underline textGradient'> Read more</Link></p>
              <div className="modal-action">
                <label htmlFor="lore-modal-6" className="btn border border-yellow-400">Awesome</label>
              </div>
            </div>
          </div>

        </div>
    );
};

export default Lore;