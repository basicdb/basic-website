import * as React from 'react';

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element | null;

declare module 'react-icons/ri' {
  export const RiTwitterXLine: IconComponent;
  export const RiBlueskyLine: IconComponent;
}

declare module 'react-icons/fa' {
  export const FaDiscord: IconComponent;
}

