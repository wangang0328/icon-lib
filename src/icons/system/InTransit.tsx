import { forwardRef } from 'react'
    import {IconProps} from '../../types/icon-props'
    export const InTransit = forwardRef<SVGSVGElement, IconProps>(({size = 24, ...restProps}, ref) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41"   width={size} height={size} {...restProps} ref={ref}>
  <path d="M0 6.25C0 2.93629 2.68629 0.25 6 0.25H34C37.3137 0.25 40 2.93629 40 6.25V34.25C40 37.5637 37.3137 40.25 34 40.25H6C2.68629 40.25 0 37.5637 0 34.25V6.25Z" fill="#2196F3"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5 24.25V22.25L21.5 17.25V11.75C21.5 10.95 20.8 10.25 20 10.25C19.2 10.25 18.5 10.95 18.5 11.75V17.25L10.5 22.25V24.25L18.5 21.75V27.25L16.5 28.75V30.25L20 29.25L23.5 30.25V28.75L21.5 27.25V21.75L29.5 24.25Z" fill="#fff"></path>
</svg>))
    InTransit.displayName = 'InTransit'
    