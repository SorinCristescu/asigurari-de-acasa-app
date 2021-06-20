import 'keen-slider/keen-slider.min.css';
import Marquee from 'react-fast-marquee';

const MarqueComponent = ({
  children,
  direction,
  speed,
  gradientColor,
  gradient,
  gradientWidth,
  play,
  className,
  style,
}) => {
  return (
    <Marquee
      gradient={gradient}
      direction={direction}
      speed={speed}
      gradient={gradient}
      gradientColor={gradientColor}
      gradientWidth={gradientWidth}
      play={play}
      className={className}
      style={style}
    >
      {children}
    </Marquee>
  );
};

export default MarqueComponent;
