import { memo } from "react";
const style = {
  with: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

// memo:propsに変更がない限り再レンダリングしない
export const ChildArea = memo((props) => {
  const { open } = props;

  //ダミー処理
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("///");
  });

  return (
    <>
      {/* 三項演算子。openがtrueだったときだけ表示 */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
