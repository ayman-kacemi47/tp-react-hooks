import React from 'react'
import refreshSvg from '../assets/refresh.svg'

export const Reloader = ({ reload} ) => {
  return (
    <button className=' z-3 btn btn-success position-fixed   right-0 z-100' style={{bottom:10}} onClick={reload} >
        
            
            <img src={refreshSvg} width={30} />
       

 
    </button>
  )
}
