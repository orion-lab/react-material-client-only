export const usernameSelector = (state, props) => props.match.params.username;
export const pathSelector = (state, props) => props.match.path;
export const categorySelector = (state, props) => {
  let category;
  if (props.location && props.location.pathname) {
    const { pathname } = props.location;
    const pathSplit = pathname.split('/');
    if (pathSplit.length === 4 && pathSplit[2] === 'category') {
      category = pathSplit[pathSplit.length - 1];
    }
  }
  return category;
};
