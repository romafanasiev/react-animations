import { animated, useTransition } from '@react-spring/web';
import { Route, useLocation, Routes as RouterRoutes } from 'react-router-dom';
import { About, Home } from '../../../pages';

export const Routes = () => {
  const location = useLocation();

  const transitions = useTransition(location.pathname, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
  });

  return (
    <>
      {transitions((styles) => (
        <animated.div style={styles}>
          <RouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </RouterRoutes>
        </animated.div>
      ))}
    </>
  );
};

