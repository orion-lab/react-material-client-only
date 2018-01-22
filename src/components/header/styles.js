const styles = theme => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    '&:after': {
      bottom: -5,
      boxShadow: 'inset 0px 4px 8px -3px rgba(17, 17, 17, .06)',
      content: '""',
      height: 5,
      left: 0,
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
      transition: 'opacity 0.4s',
      width: '100%',
      willChange: 'opacity',
      zIndex: 2050,
    },
  },
  [theme.breakpoints.down('sm')]: {},
});

export default styles;
