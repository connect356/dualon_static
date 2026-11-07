import type { SVGProps } from 'react';

interface DualonLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon' | 'wordmark';
  colorTheme?: 'mint-white' | 'mint-dark' | 'violet-white' | 'violet-dark' | 'white' | 'dark' | 'mint';
  height?: number | string;
}

// Icon paths from official brand assets
function IconGroup({ fill }: { fill: string }) {
  return (
    <g fill={fill}>
      <path d="M315.62,540l19.67-19.22c3.99-3.89,2.94-10.56-2.04-13.05l-81.8-40.9-33.49-16.75c-5.39-2.69-11.73,1.22-11.73,7.25v27.96s45.22,22.61,45.22,22.61l64.17,32.09Z" />
      <path d="M315.62,540l-64.17,32.09-45.23,22.61v27.96c0,6.02,6.35,9.94,11.74,7.25l33.49-16.75,81.8-40.9c4.98-2.49,6.03-9.15,2.04-13.05l-19.67-19.22Z" />
      <path d="M206.22,485.3l-27.17.07c-6.03,0-10.91,4.89-10.91,10.91v87.53c0,6.03,4.89,10.91,10.91,10.91l27.17-.02v-109.4Z" />
    </g>
  );
}

// Wordmark letters "DUALON" from official vectors
function TextGroup({ fill }: { fill: string }) {
  return (
    <g fill={fill}>
      <path d="M456.37,539.98c0,24.65-19.33,40.24-45.55,40.24h-32.87v-80.35h32.87c26.22,0,45.55,15.59,45.55,40.11ZM441.62,539.98c0-16.19-12.08-26.94-30.81-26.94h-18.37v54.01h18.37c18.73,0,30.81-10.75,30.81-27.07Z" />
      <path d="M474.97,543.72v-43.86h14.98v43.86c0,17.76,6.16,24.65,21.63,24.65s21.51-6.77,21.51-24.65v-43.86h14.98v43.86c0,21.63-8.22,37.94-36.49,37.94s-36.61-15.83-36.61-37.94Z" />
      <path d="M584.91,561.24l-8.94,18.97h-16.07l36.85-80.35h14.38l36.85,80.35h-16.07l-8.7-18.97h-38.3ZM604.01,517.87l-13.05,30.45h26.46l-13.41-30.45Z" />
      <path d="M724.22,580.21h-58.97v-80.35h14.5v67.3h44.47v13.05Z" />
      <path d="M729.29,539.98c0-24.53,19.21-41.56,45.55-41.56s45.43,17.04,45.43,41.56-19.21,41.69-45.43,41.69-45.55-17.04-45.55-41.69ZM805.42,539.98c0-16.79-12.45-28.27-30.57-28.27s-30.69,11.6-30.69,28.27,12.57,28.4,30.69,28.4,30.57-11.6,30.57-28.4Z" />
      <path d="M911.86,580.21h-12.32l-44.35-55.46v55.46h-14.5v-80.35h12.45l44.22,55.34v-55.34h14.5v80.35Z" />
    </g>
  );
}

export default function DualonLogo({
  className = '',
  variant = 'horizontal',
  colorTheme = 'mint-dark',
  height = 48,
  style,
  ...rest
}: DualonLogoProps) {
  let markColor = '#33CB98';
  let textColor = '#181818';

  if (colorTheme === 'mint-white') {
    markColor = '#33CB98';
    textColor = '#F2F2F2';
  } else if (colorTheme === 'mint-dark') {
    markColor = '#33CB98';
    textColor = '#181818';
  } else if (colorTheme === 'violet-white') {
    markColor = '#9966FF';
    textColor = '#F2F2F2';
  } else if (colorTheme === 'violet-dark') {
    markColor = '#9966FF';
    textColor = '#181818';
  } else if (colorTheme === 'white') {
    markColor = '#F2F2F2';
    textColor = '#F2F2F2';
  } else if (colorTheme === 'dark') {
    markColor = '#181818';
    textColor = '#181818';
  } else if (colorTheme === 'mint') {
    markColor = '#33CB98';
    textColor = '#33CB98';
  }

  const heightStyle = height !== undefined ? { height, ...style } : style;

  if (variant === 'icon') {
    return (
      <svg
        style={heightStyle}
        className={`aspect-[172/184] w-auto shrink-0 ${className}`}
        viewBox="166 448 172 184"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="DUALON Icon"
        {...rest}
      >
        <IconGroup fill={markColor} />
      </svg>
    );
  }

  if (variant === 'wordmark') {
    return (
      <svg
        style={heightStyle}
        className={`aspect-[538/84] w-auto shrink-0 ${className}`}
        viewBox="376 498 538 84"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="DUALON Wordmark"
        {...rest}
      >
        <TextGroup fill={textColor} />
      </svg>
    );
  }

  if (variant === 'stacked') {
    const numHeight = typeof height === 'number' ? height : 56;
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <svg
          style={{ height: numHeight * 1.1 }}
          className="aspect-[172/184] w-auto shrink-0"
          viewBox="166 448 172 184"
          xmlns="http://www.w3.org/2000/svg"
        >
          <IconGroup fill={markColor} />
        </svg>
        <svg
          style={{ height: numHeight * 0.6 }}
          className="aspect-[538/84] w-auto shrink-0"
          viewBox="376 498 538 84"
          xmlns="http://www.w3.org/2000/svg"
        >
          <TextGroup fill={textColor} />
        </svg>
      </div>
    );
  }

  // Default: horizontal primary logo with perfect tight viewBox (zero wasted whitespace)
  return (
    <svg
      style={heightStyle}
      className={`aspect-[748/184] w-auto shrink-0 ${className}`}
      viewBox="166 448 748 184"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DUALON Logo"
      {...rest}
    >
      <IconGroup fill={markColor} />
      <TextGroup fill={textColor} />
    </svg>
  );
}
