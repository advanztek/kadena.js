import { darkTheme, styled, StyledComponent } from '@kadena/react-components';

export const StyledCodeWrapper: StyledComponent<'div'> = styled('div', {
  backgroundColor: '$neutral2',
  borderLeft: '4px solid $borderColor',
  borderRadius: '$sm 0px 0px $sm',
  fontSize: '$sm',
  fontFamily: '$mono',
  lineHeight: '$code',

  '& [data-rehype-pretty-code-title]': {
    display: 'flex',
    alignItems: 'center',
    fontFamily: '$main',
    background: '$neutral3',
    padding: '$2',

    '&[data-language]': {
      '&::before': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 $2',
        color: '$background',
        backgroundColor: '$primaryContrast',
        borderRadius: '$sm',
        width: '$6',
        height: '$6',
      },
    },
    '&[data-language="pact"]': {
      '&::before': {
        content: 'P',
      },
    },
    '&[data-language="typescript"]': {
      '&::before': {
        content: 'TS',
      },
    },
  },

  '& [data-theme="dark"]': {
    display: 'none',
  },

  [`.${darkTheme} &`]: {
    '& [data-theme="light"]': {
      display: 'none',
    },
    '& [data-theme="dark"]': {
      display: 'grid',

      '&[data-rehype-pretty-code-title]': {
        display: 'flex',
      },
    },
  },
});

export const StyledCode: StyledComponent<'code'> = styled('code', {
  counterReset: 'line',
  whiteSpace: 'break-spaces',
  fontFamily: '$mono',

  '& *': {
    fontFamily: '$mono',
  },

  '& > .line::before': {
    counterIncrement: 'line',
    content: 'counter(line)',
    overflowWrap: 'normal',

    /* Other styling */
    display: 'inline-block',
    width: '1rem',
    marginRight: '$4',
    marginLeft: '$4',
    textAlign: 'right',
    fontSize: '$sm',
    color: '$neutral3',
  },

  '&[data-line-numbers-max-digits="2"] > .line::before': {
    width: '2rem',
  },

  '&[data-line-numbers-max-digits="3"] > .line::before': {
    width: '3rem',
  },

  '&  .word': {
    background: '$neutral3',
    outline: 'calc($sizes$1 / 2) solid $neutral3',
    borderRadius: '$xs',
  },
});
