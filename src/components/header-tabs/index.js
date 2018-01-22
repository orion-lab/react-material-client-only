import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Tabs, { Tab } from 'material-ui/Tabs';
import styles from './styles';

class HeaderTabs extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(event, value) {
    const { onChange } = this.props;
    onChange(value);
  }
  render() {
    const {
      classes,
      className,
      value,
      tabs,
    } = this.props;

    if (!tabs || !tabs.length) {
      return null;
    }

    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       <Tabs
         value={value}
         onChange={this.onChange}
         indicatorClassName={classes.indicator}
         textColor="#333"
         centered>
         {tabs.map(tab => (
           <Tab
             key={tab.id}
             value={tab.slug}
             label={tab.name}
             className={classNames({
               [classes.selected]: tab.isActive,
             })}
             classes={{
               label: classes.tabLabel,
               labelContainer: classNames(classes.tab, {
                 [classes.labelSelected]: tab.slug === value,
               }),
             }} />
         ))}
       </Tabs>
      </div>
    );
  }
}

HeaderTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
  classes: PropTypes.shape({
    tab: PropTypes.string,
    tabLabel: PropTypes.string,
    labelSelected: PropTypes.string,
    indicator: PropTypes.string,
  }),
  value: PropTypes.string,
  className: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'HeaderTabs',
  }),
)(HeaderTabs);
