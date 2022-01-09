import React, { useMemo } from "react";

const DemoList = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("Demolist running");
  return (
    <>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item, index) => (
          <li key={String(item) + String(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(DemoList);
