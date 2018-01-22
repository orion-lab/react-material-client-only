const styles = theme => ({
  gridWrapper: {
    display: 'flex',
    marginLeft: theme.typography.pxToRem(-15),
    marginRight: theme.typography.pxToRem(-15),
  },
  grid: {
    paddingLeft: theme.typography.pxToRem(15),
    paddingRight: theme.typography.pxToRem(15),
  },
  right: {
    width: '40%',
  },
  left: {
    flex: 1,
  },
});

export default styles;
