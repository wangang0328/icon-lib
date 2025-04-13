import { forwardRef } from 'react'
    import {IconProps} from '../../types/icon-props'
    export const Left = forwardRef<SVGSVGElement, IconProps>(({size = 24, ...restProps}, ref) => (<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke- stroke-linecap="round" stroke-linejoin="round" width={size} height={size} {...restProps} ref={ref}><path d="m15 18-6-6 6-6"/></svg>))
    Left.displayName = 'Left'
    