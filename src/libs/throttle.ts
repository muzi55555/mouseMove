/**
 * 함수를 지정된 시간 간격으로 실행하는 쓰로틀링 함수입니다.
 * @param func 실행할 함수
 * @param limit 시간 간격 제한 (밀리초)
 * @returns 쓰로틀링된 함수
 */
export function throttle(func: (...args: any[]) => void, limit: number) {
  let lastFunc: number;
  let lastRan: number;

  return function (...args: any[]) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
