import * as React from 'react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

declare module 'react-icons/fa' {
  export const FaDiscord: IconComponent;
}

