const styles = theme => ({
  label: {
    fontSize: theme.typography.pxToRem(13),
    color: '#ababab',
    marginBottom: theme.typography.pxToRem(5),
  },
  formLabel: {
    width: '100%',
    marginRight: 0,
    marginLeft: 0,
  },
  checkbox: {
    height: theme.typography.pxToRem(40),
    marginLeft: theme.typography.pxToRem(-14),
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.typography.pxToRem(-15),
    marginRight: theme.typography.pxToRem(-15),
  },
  formLabelGrid: {
    width: '50%',
    paddingLeft: theme.typography.pxToRem(15),
    paddingRight: theme.typography.pxToRem(15),
  },
});

export default styles;
