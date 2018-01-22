import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import classNames from 'classnames';
import ReactAutocomplete from 'react-autocomplete';
import SearchIcon from 'material-ui-icons/Search';
import styles from './styles';

function HeaderSearch({ classes, className, history }) {
  return (
    <div className={classNames(classes.root, {
       [className]: className,
     })}>
     <div className={classes.search}>
       <SearchIcon />
     </div>
     <ReactAutocomplete
       items={[{
         username: 'plataran_menteng',
         label: 'Plataran Menteng',
       }, {
         username: 'canne-cafe',
         label: 'Canne Cafe',
       }]}
       shouldItemRender={(item, value) => item.label
         .toLowerCase().indexOf(value.toLowerCase()) > -1}
       getItemValue={item => item.label}
       value=""
       onChange={() => {}}
       onSelect={(value, item) => history.push(`/${item.username}`)}
       renderItem={(item, highlighted) => (
         <div
           key={item.username}
           style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
           {item.label}
         </div>
       )}
       inputProps={{
         className: classes.input,
         placeholder: 'Cari makanan, tempat, dll',
       }} />
    </div>
  );
}

HeaderSearch.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
     search: PropTypes.string,
     input: PropTypes.string,
   }),
  className: PropTypes.string,
};

export default compose(
  withRouter,
  withStyles(styles, {
    name: 'HeaderSearch',
  }),
)(HeaderSearch);
