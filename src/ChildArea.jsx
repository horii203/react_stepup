const style = {
  with: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const ChildArea = (props) => {
  const { open } = props;
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
};
