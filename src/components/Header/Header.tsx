import React from 'react';
import {HeaderContainer} from '../../style/header'

type Props={
  text:string
}

function Header(props:Props) {
  return (
     <HeaderContainer>
      {props.text}
     </HeaderContainer>
  )
}

export default Header