const styles = theme => ({
  inputRoot: {
    width: '100%',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      height: theme.typography.pxToRem(1),
      backgroundColor: '#f6bbcf',
    },
  },
  selectMenu: {
    background: '#ededed',
    borderRadius: theme.typography.pxToRem(3),
    paddingLeft: theme.typography.pxToRem(10),
    fontSize: theme.typography.pxToRem(14),
    height: theme.typography.pxToRem(33),
    paddingBottom: 0,
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      borderRadius: theme.typography.pxToRem(3),
    },
  },
});

export default styles;
