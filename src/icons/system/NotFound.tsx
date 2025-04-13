import { forwardRef } from 'react'
    import {IconProps} from '../../types/icon-props'
    export const NotFound = forwardRef<SVGSVGElement, IconProps>(({size = 24, ...restProps}, ref) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41"   width={size} height={size} {...restProps} ref={ref}>
  <path d="M0 6.25C0 2.93629 2.68629 0.25 6 0.25H34C37.3137 0.25 40 2.93629 40 6.25V34.25C40 37.5637 37.3137 40.25 34 40.25H6C2.68629 40.25 0 37.5637 0 34.25V6.25Z" fill="#757575"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26 10.25V16.25L22 20.25L26 24.25V30.25H14V24.25L18 20.25L14 16.25V10.25H26ZM20 20.75L16 24.75V28.25H24V24.75L20 20.75ZM24 12.25H16V15.75L20 19.75L24 15.75V12.25Z" fill="#fff"></path>
</svg>))
    NotFound.displayName = 'NotFound'
    