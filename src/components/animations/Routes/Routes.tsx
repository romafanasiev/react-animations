import { animated, useTransition } from '@react-spring/web';
import {
  Route,
  useLocation,
  Routes as RouterRoutes,
  createBrowserRouter,
} from 'react-router-dom';
import { About, Home } from '../../../pages';

import type { PropsWithChildren } from 'react';

const RouteAnimation = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  const transitions = useTransition(location.pathname, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(100%)' },
    exitBeforeEnter: true,
  });

  return (
    <>
      {transitions((styles) => (
        <animated.div style={styles}>{children}</animated.div>
      ))}
    </>
  );
};

export const createdRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouteAnimation>
        <Home />
      </RouteAnimation>
    ),
  },
  {
    path: '/about',
    element: (
      <RouteAnimation>
        <About />
      </RouteAnimation>
    ),
  },
]);

export const Routes = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(100%)' },
    exitBeforeEnter: true,
  });

  return (
    <>
      {transitions((styles, item) => (
        <animated.div style={styles}>
          <RouterRoutes location={item}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </RouterRoutes>
        </animated.div>
      ))}
    </>
  );
};

