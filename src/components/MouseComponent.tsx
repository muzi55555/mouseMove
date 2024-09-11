import { useEffect, useState } from 'react';
import styles from './MouseComponent.module.css';

interface IPosition {
  x: number;
  y: number;
}

export default function MouseComponent() {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  console.log('x =>', position.x, 'y =>', position.y);

  return <div className={styles.boxItem}>mouse event</div>;
}
