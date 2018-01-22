import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import pxToRem from './utils/pxToRem';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        width: pxToRem(22),
        height: pxToRem(22),
      },
    },
    MuiBadge: {
      badge: {
        width: pxToRem(24),
        height: pxToRem(24),
        top: pxToRem(-6),
        right: pxToRem(-14),
      },
    },
    MuiIconButton: {
      root: {
        width: pxToRem(48),
        height: pxToRem(48),
      },
    },
    MuiToolbar: {
      root: {
        minHeight: pxToRem(50),
        '@media (min-width:0px) and (orientation: landscape)': {
          minHeight: pxToRem(48),
        },
        '@media (min-width: 600px)': {
          minHeight: pxToRem(50),
        },
      },
    },
    MuiMenuItem: {
      root: {
        paddingLeft: pxToRem(16),
        paddingRight: pxToRem(16),
        paddingTop: pxToRem(5),
        paddingBottom: pxToRem(5),
        fontSize: pxToRem(14),
        height: pxToRem(24),
      },
    },
    MuiTab: {
      root: {
        '@media (min-width: 960px)': {
          minWidth: 'auto',
        },
      },
      labelContainer: {
        '@media (min-width: 960px)': {
          paddingLeft: pxToRem(15),
          paddingRight: pxToRem(15),
        },
        paddingLeft: pxToRem(10),
        paddingRight: pxToRem(10),
      },
    },
    MuiTypography: {
      title: {
        fontSize: pxToRem(18),
      },
    },
  },
});

export default theme;
