import React, { useRef, useState } from "react";

const Draggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const parentRef = useRef(null); // Untuk mengetahui ukuran pembatas
  const modalRef = useRef(null);
  const handleMouseDown = (e) => {
    setIsDragging(true);

    // clientX dan ClientY itu mengetahui posisi mouse dari window Kiri
    console.log(e.clientX, e.clientY);

    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rec = parentRef.current.getBoundingClientRect();

      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      const boundingX = Math.max(
        0,
        Math.min(newX, rec.width - modalRef.current.offsetWidth)
      );
      const boundingY = Math.max(
        0,
        Math.min(newY, rec.width - modalRef.current.offsetHeight)
      );
      setPosition({ x: boundingX, y: boundingY });
    }
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    console.log(position);
  };

  return (
    <>
      <div
        ref={parentRef}
        className="relative w-[40rem] h-screen bg-green-100 border-2 border-blue-700"
      >
        <div
          ref={modalRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          className={` w-[10rem] h-[10rem] bg-orange-100`}
          style={{
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        >
          <p>Drag Me !</p>
        </div>
      </div>
    </>
  );
};

export default Draggable;
