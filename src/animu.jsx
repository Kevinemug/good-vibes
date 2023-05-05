import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollAnimatedElement = () => {
    const ref = useRef();
  
    const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      from: { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
      ref,
    });
  
    return (
      <animated.div className="animated-element" style={props} ref={ref}>
        <h1>This element animates as you scroll!</h1>
      </animated.div>
    );
  };
  
export default ScrollAnimatedElement ; 