import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  separator?: string;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp = ({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  separator = ',',
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) => {
  const { value, elementRef } = useCountUp({
    start,
    end,
    duration,
    decimals,
    separator,
    suffix,
    prefix,
    startOnView: true,
  });

  return (
    <span ref={elementRef} className={className}>
      {value}
    </span>
  );
};
