
import * as S from "../spinner/spinner.styled";

function Spinner() {
  return (
    <S.SpinnerWrapper>
      <S.Spinner>
        <S.Dot1 />
        <S.Dot2 />
      </S.Spinner>
    </S.SpinnerWrapper>
  );
}

export default Spinner;
