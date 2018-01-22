const styles = theme => ({
  root: {
    display: 'flex',
  },
  textFieldRoot: {
    display: 'flex',
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: theme.typography.pxToRem(4),
    boxSizing: 'border-box',
    background: '#ededed',
    border: 0,
    fontSize: theme.typography.pxToRem(14),
    padding: '10px 12px',
    width: '100%',
    height: theme.typography.pxToRem(33),
    '&:focus': {
      borderBottom: '1px solid #f6bbcf',
    },
  },
  multiline: {
    height: '100%',
  },
});

export default styles;
