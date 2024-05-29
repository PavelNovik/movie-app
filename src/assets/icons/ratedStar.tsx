import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      fill={'none'}
      height={'28.000000'}
      viewBox={'0 0 28 28'}
      width={'28.000000'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
      ref={ref}
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id={'clip18002_454'}>
          <rect
            fill={'white'}
            fillOpacity={'0'}
            height={'28.000000'}
            id={'star'}
            width={'28.000000'}
          />
        </clipPath>
      </defs>
      <g clipPath={'url(#clip18002_454)'}>
        <path
          d={
            'M14 20.7L6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L14 20.7Z'
          }
          fill={'#FAB005'}
          fillOpacity={'1.000000'}
          fillRule={'nonzero'}
          id={'Vector'}
        />
        <path
          d={
            'M6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L14 20.7L6.79 24.49Z'
          }
          id={'Vector'}
          stroke={'#FAB005'}
          strokeLinejoin={'round'}
          strokeOpacity={'1.000000'}
          strokeWidth={'2.000000'}
        />
      </g>
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponent)

export const StarR = memo(ForwardRef)
