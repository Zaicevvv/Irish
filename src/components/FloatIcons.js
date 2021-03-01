import React from 'react'
import bgIcon1 from '../../src/assets/images/dest/bg-icons/1.png'
import bgIcon2 from '../../src/assets/images/dest/bg-icons/2.png'
import bgIcon3 from '../../src/assets/images/dest/bg-icons/3.png'
import bgIcon4 from '../../src/assets/images/dest/bg-icons/4.png'
import bgIcon5 from '../../src/assets/images/dest/bg-icons/5.png'
import bgIcon6 from '../../src/assets/images/dest/bg-icons/6.svg'
import bgIcon7 from '../../src/assets/images/dest/oval-3.svg'

const FloatIcons = () => {
  return (
    <div>
        <span className="float_icon" style={{left: '31%', top: '15%', width: '50px'}}>
            <img src={bgIcon1} alt="#" />
        </span>
        <span className="float_icon" style={{ left: '25%', bottom: '20%', width: '45px' }}>
            <img src={bgIcon2} alt="#" />
        </span>
        <span className="float_icon" style={{ right: '20%', bottom: '25%', width: '58px' }}>
            <img src={bgIcon3} alt="#" />
        </span>
        <span className="float_icon" style={{ left: '15%', bottom: '40%', width: '45px' }}>
            <img src={bgIcon4} alt="#" />
        </span>
        <span className="float_icon" style={{ right: '30%', top: '15%', width: '85px' }}>
            <img src={bgIcon5} alt="#" />
        </span>
        <span className="float_icon" style={{ left: '-20px', bottom: '15%', width: '110px' }}>
            <img src={bgIcon6} alt="#" />
        </span>
        <span className="float_icon" style={{ right: '-40px', bottom: '15%', width: '110px', transform: 'rotate(-25deg)' }}>
            <img src={bgIcon6} alt="#" />
        </span>
          <span className="float_icon m_hide" style={{ left: '10%', bottom: '0%', width: '240px' }}>
            <img src={bgIcon7} alt="#" />
        </span>
    </div>
  )
}

export default FloatIcons