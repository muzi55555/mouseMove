import { useEffect, useState } from 'react';
import styles from './MouseComponent.module.css';

interface IPosition {
  x: number;
  y: number;
}

export default function MouseComponent() {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const arrLength = 1500;
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
        <div key={el} className={styles.boxItem} style={{ top: `${position.y}px`, left: `${position.x}px` }}>
          {el}
        </div>
      ))}
    </>
  );
}
