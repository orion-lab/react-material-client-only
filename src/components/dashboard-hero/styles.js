const styles = theme => ({
  root: {
    backgroundColor: '#ededed',
    paddingTop: theme.typography.pxToRem(15),
    paddingBottom: theme.typography.pxToRem(15),
    position: 'relative',
    '&:after': {
      bottom: 0,
      boxShadow: 'inset 0px -3px 8px -3px rgba(17, 17, 17, .06)',
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
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 600,
  },
});

export default styles;
