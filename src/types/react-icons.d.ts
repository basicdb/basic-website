import * as React from 'react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

declare module 'react-icons/ri' {
  export const RiTwitterXLine: IconComponent;
  export const RiBlueskyLine: IconComponent;
}

declare module 'react-icons/fa' {
  export const FaDiscord: IconComponent;
}

