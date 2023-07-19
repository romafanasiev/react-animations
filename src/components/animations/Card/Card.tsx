import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const initialState = [0, 0, 1];

export const Card = () => {
  const cardRef = useRef(null);
  const [{ xys }, api] = useSpring(
    () => ({
      xys: initialState,
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
      },
    }),
    []
  );

  const handleMouseLeave = () =>
    api.start({
      xys: initialState,
    });

  const calc = (x: number, y: number, rect: DOMRect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4,
  ];

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const card = cardRef.current as Element;
      const rect = card.getBoundingClientRect();
      api.start({
        xys: calc(e.clientX, e.clientY, rect),
      });
    }
  };

  return (
    <div ref={cardRef}>
      <animated.div
        className="w-[200px] h-[200px] bg-lime-500 rounded-lg"
        style={{ transform: xys.to(trans) }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
};

