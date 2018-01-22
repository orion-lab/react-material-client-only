const styles = theme => ({
  formItem: {
    marginBottom: theme.typography.pxToRem(20),
  },
  columnSplit: {
    display: 'flex',
    marginLeft: theme.typography.pxToRem(-15),
    marginRight: theme.typography.pxToRem(-15),
  },
  columnSplitGrid: {
    paddingLeft: theme.typography.pxToRem(15),
    paddingRight: theme.typography.pxToRem(15),
    flex: 1,
  },
});

export default styles;
