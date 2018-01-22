const styles = theme => ({
  root: {
    boxShadow: 'none',
    borderRadius: theme.typography.pxToRem(20),
    textTransform: 'none',
    fontWeight: 600,
    paddingLeft: theme.typography.pxToRem(15),
    paddingRight: theme.typography.pxToRem(15),
    paddingTop: theme.typography.pxToRem(6),
    paddingBottom: theme.typography.pxToRem(6),
    minWidth: 'auto',
    fontSize: theme.typography.pxToRem(14),
    minHeight: theme.typography.pxToRem(33),
    lineHeight: 1,
  },
  leftGutter: {
    marginLeft: theme.typography.pxToRem(10),
  },
  rightGutter: {
    marginRight: theme.typography.pxToRem(10),
  },
  icon: {
    width: theme.typography.pxToRem(17),
    height: theme.typography.pxToRem(17),
    verticalAlign: 'top',
  },
  iconWrapper: {
    lineHeight: 1,
  },
  iconButton: {},
  leftIcon: {
    marginRight: theme.typography.pxToRem(5),
    display: 'flex',
  },
  rightIcon: {
    marginLeft: theme.typography.pxToRem(5),
  },
  small: {
    fontSize: theme.typography.pxToRem(13),
    paddingLeft: theme.typography.pxToRem(13),
    paddingRight: theme.typography.pxToRem(13),
    minHeight: theme.typography.pxToRem(27),
  },
  raised: {},
  noLabel: {},
});

export default styles;
