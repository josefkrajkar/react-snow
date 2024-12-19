import { useRef, useEffect } from "react";

interface SnowProps {
  count?: number;
  className?: string;
  snowflakeWidth?: number;
  timeOffset?: number;
  blurValue?: number;
}

const MAGIC_CONSTANT = 0.026;
let snowflakexCount;

function Snow({
  count,
  className,
  snowflakeWidth = 30,
  timeOffset = 5,
  blurValue = 10,
}: SnowProps) {
  const conatainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = conatainerRef.current;
    if (!el) {
      return;
    }

    snowflakexCount = count || Math.floor(el.clientWidth * MAGIC_CONSTANT);

    for (let i = 0; i < snowflakexCount; i++) {
      const snow = document.createElement("div");
      snow.className = "snow";
      const left = Math.floor(Math.random() * el.clientWidth);
      const top = Math.floor(Math.random() * el.clientHeight - 100);
      const width = Math.floor(Math.random() * snowflakeWidth);
      const time = Math.floor(Math.random() * 5) + timeOffset;
      const blur = Math.floor(Math.random() * blurValue);

      snow.style.left = `${left}px`;
      snow.style.top = `${top}px`;
      snow.style.width = `${width}px`;
      snow.style.height = `${width}px`;
      snow.style.animationDuration = `${time}s`;
      snow.style.filter = `blur(${blur}px)`;

      el.appendChild(snow);
    }
  }, [count, snowflakeWidth, timeOffset, blurValue]);

  return <div id="container" ref={conatainerRef} className={className} />;
}

export default Snow;
