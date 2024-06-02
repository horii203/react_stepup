import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./index.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState("");

  //入力した文字をsetText関数にわたす＝textの内容が更新される
  const onChangeText = (e) => setText(e.target.value);

  // 状態を反対にする
  const onClickOpen = () => setOpen(!open);

  //子コンポーネントの「閉じる」をクリックして閉じる
  // アロー関数で書くと、毎回新しい関数を生成しているので、再レンダリングが発生してしまう→useCallbackで解決
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>

      {/* openのStateをopenという名のpropsで渡す */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
