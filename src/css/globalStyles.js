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
      marginRight: '30px',
      fontSize: '16px',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },

    'a:hover': {
      color: '#3333FF',
    },
    ul: {
      padding: '20px 0',
    },
    li: {
      padding: '0 0 0 10px',
    },
    p: {
      fontSize: '16px',
      fontWeight: 'semibold',
      color: '#808080',
    },
  }),
};
