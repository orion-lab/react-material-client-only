const styles = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(14),
    color: '#797979',
    lineHeight: 1.4,
    marginTop: theme.typography.pxToRem(10),
    marginBottom: theme.typography.pxToRem(10),
  },
  centered: {
    textAlign: 'center',
  },
  header: {
    fontWeight: '600',
    color: '#525252',
    lineHeight: 1,
    marginTop: 0,
  },
  h1: {},
  h2: {},
  h3: {
    fontSize: theme.typography.pxToRem(17),
  },
  h4: {},
  h5: {},
  h6: {},
});

export default styles;
