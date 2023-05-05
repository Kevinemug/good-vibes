import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBackground = () => {
  const ref = useRef();

  const props = useSpring({
    to: { transform: 'translate3d(0, -50px, 0)' },
    from: { transform: 'translate3d(0, 0, 0)' },
    ref,
  });

  return (
    <animated.div
      className="background"
      style={{
        backgroundImage: 'url("https://images.freeimages.com/images/large-previews/bc7/gallery-1-1220733.jpg")',
        ...props,
      }}
    />
  );
};
export default AnimatedBackground;