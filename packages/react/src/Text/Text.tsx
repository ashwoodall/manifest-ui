import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  // Reset
  display: 'block',
  lineHeight: '$base',
  margin: '0',
  fontWeight: '$light',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    fontSize: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
      },
      '6': {
        fontSize: '$6',
      },
      '7': {
        fontSize: '$7',
      },
      '8': {
        fontSize: '$8',
      },
      '9': {
        fontSize: '$9',
      },
    },
    variant: {
      contrast: {
        color: '$hiContrast',
      },
      secondary: {
        color: '$neutral50',
      },
    },
    isTruncated: {
      true: {},
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
});
