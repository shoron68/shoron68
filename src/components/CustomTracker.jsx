import React, { useRef, useEffect, useState } from 'react';

const CustomTracker = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showText, setShowText] = useState(false);
  const trackerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });

      // Check if the element under the mouse is clickable
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (
        hoveredElement &&
        (hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.classList.contains('clickable'))
      ) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={trackerRef}
      style={{
        transform: `translate(${coords.x}px, ${coords.y}px)`,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-300 ease-out"
    >
      <div className="h-5 w-5 border-[2px] mt-[50px] border-[#80ed99] rounded-full relative flex items-center justify-center">
        {showText && (
          <span className="absolute top-full mt-1 text-xs text-white font-Playfair px-2 py-[1px] rounded">
            Click
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomTracker;
