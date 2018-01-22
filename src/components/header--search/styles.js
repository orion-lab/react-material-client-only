const styles = theme => ({
  root: {
    background: 'rgba(133, 133, 133, 0.15)',
    display: 'flex',
    maxWidth: theme.typography.pxToRem(550),
    borderRadius: theme.typography.pxToRem(3),
    flex: 1,
  },
  search: {
    width: theme.typography.pxToRem(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    outline: 0,
    border: 0,
    background: 'transparent',
    paddingTop: theme.typography.pxToRem(7),
    paddingBottom: theme.typography.pxToRem(7),
    paddingLeft: theme.typography.pxToRem(20),
    paddingRight: theme.typography.pxToRem(20),
    color: '#333',
    flex: 1,
    fontSize: theme.typography.pxToRem(14),
    fontFamily: 'inherit',
    '&::placeholder': {
      color: '#333',
      opacity: 0.5,
    },
  },
});

export default styles;
