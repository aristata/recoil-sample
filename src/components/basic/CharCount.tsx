import { useRecoilValue } from "recoil";
import charCountState from "../../recoils/basic/charCountState";

const CharCount = () => {
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <h3>selector 로 조합된 스테이트</h3>
      <p>Character Count = {count}</p>
    </div>
  );
};

export default CharCount;
