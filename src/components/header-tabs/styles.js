const styles = theme => ({
  tab: {
    textTransform: 'none',
    fontWeight: '600',
  },
  tabLabel: {
    fontSize: theme.typography.pxToRem(14),
  },
  labelSelected: {
    background: '#fc4482',
    borderRadius: '20px',
    color: '#fff',
  },
  indicator: {
    display: 'none',
  },
});

export default styles;
