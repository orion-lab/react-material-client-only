const styles = theme => ({
  header: {
    position: 'relative',
    height: theme.typography.pxToRem(60),
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url(https://storage.googleapis.com/eatron-static/pattern.jpg)',
      backgroundSize: '70%',
      zIndex: 1,
      opacity: 0.2,
    },
    overflow: 'hidden',
  },
  headerIcon: {
    position: 'relative',
    zIndex: 2,
    height: theme.typography.pxToRem(80),
    width: theme.typography.pxToRem(80),
    background: '#fff',
    border: '1px solid #eee',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: theme.typography.pxToRem(35),
    width: theme.typography.pxToRem(35),
    color: '#797979',
  },
  dialogContent: {
    padding: theme.typography.pxToRem(30),
  },
});

export default styles;
