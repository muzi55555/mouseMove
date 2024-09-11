import { useEffect, useState } from 'react';
import styles from './MouseComponent.module.css';

interface IPosition {
  x: number;
  y: number;
}

export default function MouseComponent() {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const arrLength = 150;
  const newArr: number[] = Array.from({ length: arrLength }, (_, i) => i + 1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {newArr.map((el) => (
        <div
          key={el}
          className={styles.boxItem}
          style={{
            transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
          }}
        >
          {el}
        </div>
      ))}
    </>
  );
}
