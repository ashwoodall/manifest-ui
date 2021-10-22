import React from 'react';
import { Icon, IconProps, useColorModeValue } from '@manifest-ui/react';

const Logo = (props: IconProps) => {
  return (
    <Icon
      h="25px"
      w="25px"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.485 3.527a11.914 11.914 0 0 0-8.487-3.52c-3.207 0-6.222 1.25-8.49 3.52-4.678 4.684-4.678 12.305 0 16.99h.002c4.643 4.647 12.176 4.683 16.864.108l.055-.054.056-.054A11.935 11.935 0 0 0 24 12.022a11.927 11.927 0 0 0-3.515-8.495Zm-8.96 11.841h-1.401v3.42H7.947v-3.42H2.589v-2.07l3.236-8.456h2.227l-3.309 8.484h3.204v-3.31h2.177v3.31h1.401v2.042Zm8.273 3.42v-3.42H21.2v-2.042h-1.402v-3.31H17.62v3.31h-3.204l3.311-8.484H15.5l-3.234 8.456v2.07h5.354v3.42h2.178Z"
        fill={useColorModeValue('white', 'white')}
      />
    </Icon>
  );
};

export default Logo;