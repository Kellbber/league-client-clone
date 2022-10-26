import React from 'react'
import * as S from './style'
type Label={
label: string;
}
const checkbox = () => {
  return (
    <S.divStay>
        <label>Stay signed in
        <S.input type="checkbox" />
        <span></span>
        </label>

    
    </S.divStay>

  )
}

export default checkbox;