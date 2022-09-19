import React from "react";
import { useRecoilState } from "recoil";
import textState from "../../recoils/basic/textState";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type={"text"} value={text} onChange={onChangeHandler} />
      <h3>atom 에서 조회한 스테이트</h3>
      <p>Echo: {text}</p>
    </div>
  );
};

export default TextInput;
