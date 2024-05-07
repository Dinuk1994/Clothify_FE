import React from 'react'

interface registerBtnProps{
    name : string
    click? : ()=> void;
    makeDissable? : boolean;
    className? : string;
}

const registerBtn: React.FC<registerBtnProps> = ({name,click,makeDissable,className}) => {
  return (
    <div >
        <button onClick={click} disabled={makeDissable} className={className}>{name}</button>
    </div>
  )
}

export default registerBtn