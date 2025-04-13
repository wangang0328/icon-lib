import { forwardRef } from 'react'
    import {IconProps} from '../../types/icon-props'
    export const Arrived = forwardRef<SVGSVGElement, IconProps>(({size = 24, ...restProps}, ref) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41"   width={size} height={size} {...restProps} ref={ref}>
  <path d="M0 6.25C0 2.93629 2.68629 0.25 6 0.25H34C37.3137 0.25 40 2.93629 40 6.25V34.25C40 37.5637 37.3137 40.25 34 40.25H6C2.68629 40.25 0 37.5637 0 34.25V6.25Z" fill="#2962FF"></path>
  <path d="M11 29.2498V27.2495H29V29.2498H11ZM26.8497 24.1498L11 19.7495V14.2498L12.5 14.75L13.1997 16.85L17.9998 18.2V10.25L20 10.7503L22.7502 19.5005L27.7505 20.9008C28.1178 20.9898 28.4414 21.2068 28.6632 21.5128C28.8883 21.8217 29 22.1675 29 22.5508C29 23.1005 28.775 23.543 28.325 23.876C27.875 24.209 27.383 24.3012 26.8497 24.1512V24.1498Z" fill="#fff"></path>
</svg>))
    Arrived.displayName = 'Arrived'
    