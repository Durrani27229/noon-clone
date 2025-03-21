import React from 'react'

const Btn = (props) => {
  return (
   <button className={props.class} style={{
    backgroundColor: props.color,
    color: props.textColor,
    border: 'none',
    padding: '0px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    height: '40px'

   }}>
    {props.title}
   </button>
  )
}

export default Btn
