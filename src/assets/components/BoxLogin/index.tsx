import React, { useState } from 'react'
import { StringDecoder } from 'string_decoder';
import * as S from './style'
import Checkbox from "../Checkbox";
const BoxLogin = () => {
  const[colorUser,  setColorUser] = useState<boolean>(false);
  const[colorPass,  setColorPass] = useState<boolean>(false);
  console.log(colorUser)
  return (
    <S.background>
        <S.riotLogo>
            <img/>
        </S.riotLogo>
        <S.SignIn>
            Sign in
        </S.SignIn>
        <S.divInputUser clicked={colorUser} >
          <p>USERNAME</p>
          <input type="text" onClick={()=>{ setColorUser(true); setColorPass(false)}}/>
        </S.divInputUser>
        <S.divInputPass clicked={colorPass}>
          <p>PASSWORD</p>
          <input type="password"  onClick={()=>{ setColorPass(true); setColorUser(false)}}/>
        </S.divInputPass>
        <S.divIcons>
          <S.divFace>
            <img/>
          </S.divFace>
          <S.divGoogle>
            <img/>
          </S.divGoogle>
          <S.divApple>
            <img/>
          </S.divApple>
        </S.divIcons>
          <Checkbox />


    </S.background>
  )
}


export default BoxLogin;