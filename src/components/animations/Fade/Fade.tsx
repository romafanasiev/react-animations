import { useSpring, animated } from '@react-spring/web';

import type { PropsWithChildren } from 'react';

export const Fade = ({ children }: PropsWithChildren) => {
  const fade = useSpring({
    config: { duration: 3000 },
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return <animated.div style={fade}>{children}</animated.div>;
};

