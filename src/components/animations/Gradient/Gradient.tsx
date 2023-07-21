import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const startGradient =
  'linear-gradient(90deg, rgba(58,179,180,1) 0%, rgba(29,253,40,1) 50%, rgba(201,69,252,1) 100%)';
const endGradient =
  'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(21,21,125,0.7563296742209632) 35%, rgba(0,212,255,1) 100%)';

export const Gradient = () => {
  const [isReversed, setIsReversed] = useState(false);

  const props = useSpring({
    from: {
      background: isReversed ? endGradient : startGradient,
    },
    to: {
      background: isReversed ? startGradient : endGradient,
    },
    onRest: () => setIsReversed((prevState) => !prevState),
    config: {
      duration: 3000,
    },
  });

  return <animated.div className="h-screen w-screen" style={props} />;
};

