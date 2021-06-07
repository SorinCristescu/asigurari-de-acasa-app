export const styles = {
  global: (props) => ({
    'html, body': {
      fontSize: 'md',
      color: props.colorMode === 'dark' ? '#FFF9F2' : '#0D0D0D',
      backgroundColor: props.colorMode === 'dark' ? '#0D0D0D' : '#FFF9F2',
      fontFamily: 'Barlow,  Helvetica Neue, Helvetica,sans-serif',
      boxSizing: 'border-box',
      lineHeight: 'tall',
      overflowX: 'hidden',
    },
    html: {
      scrollBehavior: 'smooth',
    },
    '*:focus': {
      boxShadow: 'none !important',
      outline: 'none !important',
    },
    '*:active': {
      boxShadow: 'none !important',
      outline: 'none !important',
    },
    a: {
      color: props.colorMode === 'light' ? '#0D0D0D' : '#FFF9F2',
      marginRight: '30px',
    },
  }),
};
