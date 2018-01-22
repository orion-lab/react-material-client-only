const styles = theme => ({
  root: {
    zIndex: 2,
  },
  leftSide: {
    minWidth: theme.typography.pxToRem(115),
  },
  centerSide: {
    flex: 1,
    paddingLeft: theme.typography.pxToRem(15),
    paddingRight: theme.typography.pxToRem(15),
    display: 'flex',
  },
  rightSide: {
    display: 'flex',
  },
});

export default styles;
