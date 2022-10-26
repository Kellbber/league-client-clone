import * as S from './style'
import {AiOutlineUser} from 'react-icons/ai'
const ImageLogin = () => {
  return (
    <S.background>
        <S.admDiv>
        <S.icon>
            <AiOutlineUser cursor="pointer" color="#D9D9D9" size={20}/>
        </S.icon>
        </S.admDiv>

    </S.background>
  )
}

export default ImageLogin;