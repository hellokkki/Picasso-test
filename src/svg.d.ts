
declare module '*.svg' {
   import * as React from 'react'
    export const ReactComponent: React.FC<React.ComponentProps<'svg'> & {title?: string}>;
    const src: string;
    export default src;
  }
  