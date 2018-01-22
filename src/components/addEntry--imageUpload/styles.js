const styles = theme => ({
  imageThumbnails: {
    textAlign: 'center',
  },
  imageThumbnailsButton: {
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
    verticalAlign: 'top',
    background: 'none',
    border: 0,
    outline: 'none',
    padding: 0,
    margin: 0,
    marginLeft: theme.typography.pxToRem(3),
    marginRight: theme.typography.pxToRem(3),
    cursor: 'pointer',
  },
  imageThumbnailsImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: theme.typography.pxToRem(3),
  },
  imageBigThumbnail: {
    marginTop: theme.typography.pxToRem(15),
  },
  imageBigThumbnailImage: {
    borderRadius: theme.typography.pxToRem(3),
  },
  changeImageButtonWrapper: {
    textAlign: 'center',
    marginTop: theme.typography.pxToRem(10),
  },
});

export default styles;
