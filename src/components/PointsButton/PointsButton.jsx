import { useContext, useState, useRef } from 'react';
import { GlobalSum } from '../../Contexts/GlobalSum';

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

export const PointsButton = () => {
  const globalSum = useContext(GlobalSum)

  // Expand Components Control
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  // Modal Animation
  const transitionCost = useTransition(isOpen, {
    from: { x: 10, y: -2, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 10, y: -2, opacity: 0 },
    config: {duration: 200},
  });

  const transitionExp = useTransition(isOpen, {
    from: { x: 2, y: -10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 2, y: -10, opacity: 0 },
    config: {duration: 200},
  });

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)
  
  return (
    <div
      onClick={() => handleIsOpen()} 
      className="points-button-container"
      ref={refContainer} // Outside Click (Reference)
    >
      <span>XP: {globalSum.sum}</span>
      {
        transitionCost(
          (styles, item) => item &&
          <animated.div className="total-cost" style={styles}>
            <span>Soma geral</span>
            <span>1010</span>
          </animated.div>
        )
      }
      {
        transitionExp(
          (styles, item) => item &&
          <animated.div className="exp-link" style={styles}>
            <span>Exp total</span>
            <span>1020</span>
          </animated.div>
        )
      }
    </div>
  )
}