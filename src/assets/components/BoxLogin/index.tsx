import React, { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai';

import * as S from './style'
import Checkbox from "../Checkbox";
import ButtonSubmit from '../ButtonSubmit';
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
        <ButtonSubmit><AiOutlineArrowRight color='white' size={25}/></ButtonSubmit>
        <S.divText>
          <p>CAN`T SIGN UP</p>
          <p>CREATE ACCOUNT</p>
        </S.divText>
        <S.divVersion>
          <p>
            V60.0.3
          </p>
        </S.divVersion>
    </S.background>
  )
}


export default BoxLogin;