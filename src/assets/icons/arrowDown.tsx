import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      fill={'none'}
      height={'24.000000'}
      viewBox={'0 0 24 24'}
      width={'24.000000'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
      ref={ref}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <rect
        fill={'#FFFFFF'}
        fillOpacity={'0'}
        height={'24.000000'}
        id={'Iconex/Light/Down 2'}
        transform={'matrix(-0 -1 -1 0 24 24)'}
        width={'24.000000'}
      />
      <path
        d={'M5 9L11.21 14.33C11.66 14.71 12.33 14.71 12.78 14.33L19 9'}
        id={'Vector 140'}
        stroke={'#ACADB9'}
        strokeLinecap={'round'}
        strokeOpacity={'1.000000'}
        strokeWidth={'1.500000'}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponent)

export const ArrowDown = memo(ForwardRef)
