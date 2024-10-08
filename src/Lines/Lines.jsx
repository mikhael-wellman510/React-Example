import React, { useEffect, useRef, useState } from "react";

const Lines = () => {
  const ref = useRef(null);
  const [draw, setDraw] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [endPos, setEndPos] = useState({ x: 0, y: 0 });
  const [lines, setLines] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach((val) => {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(val.startPos.x, val.startPos.y);
      ctx.lineTo(val.end.x, val.end.y);
      ctx.stroke();
      ctx.closePath();
    });

    if (draw) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(currentPos.x, currentPos.y);
      ctx.stroke();
      ctx.closePath();
    }

    console.log(lines);
  }, [endPos, currentPos]);

  const HandleMouseDown = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const start = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    console.log("start :", start);

    setStartPos(start);
    setDraw(true);
    setMouseDown(true);
    // Handle blm kepencet
  };

  const HandleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const move = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setCurrentPos(move);
  };

  const HandleMouseUp = (e) => {
    console.log("masuk");

    const rect = ref.current.getBoundingClientRect();
    const end = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setEndPos(end);

    // Untuk handle jika melepas mouse d luar canvas
    if (startPos.x !== end.x && !startPos.y !== end.y && mouseDown) {
      setLines((prev) => [...prev, { startPos, end }]); // Kirim Line Nya
      setDraw(false); // ini stop move nya
      setMouseDown(false);
    }

    setDraw(false);
    setMouseDown(false);
  };
  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center">
        <canvas
          ref={ref}
          width={"500px"}
          height={"500px"}
          onMouseDown={HandleMouseDown}
          onMouseMove={HandleMouseMove}
          onMouseUp={HandleMouseUp}
          className="bg-gray-100"
        ></canvas>
      </div>
    </>
  );
};

export default Lines;
