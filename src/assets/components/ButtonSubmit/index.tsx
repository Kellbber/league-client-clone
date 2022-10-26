import* as S from './style'
import { ButtonHTMLAttributes } from "react";
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
const ButtonSubmit = ({...ButtonType}: ButtonType) => {
  return (
<S.ButtonSubmit{...ButtonType}>

</S.ButtonSubmit>
  )
}

export default ButtonSubmit;