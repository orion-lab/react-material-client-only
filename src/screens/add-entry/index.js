import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Header from '../../components/header';
import HeaderTabs from '../../components/header-tabs';
import Container from '../../components/container';
import AddEntryForm from '../../components/addEntry--form';
import DashboardHero from '../../components/dashboard-hero';
import styles from './styles';
import states from './states';
import actions from './actions';

class AddEntry extends Component {
  constructor() {
    super();
    this.state = {};
    this.onAddEntry = this.onAddEntry.bind(this);
  }
  componentWillMount() {
    const { getEateryData } = this.props;
    getEateryData();
  }
  onAddEntry(data) {
    const { createNewEntry, eateryId, token } = this.props;
    const newData = { ...data, eateryId };
    createNewEntry(newData, token);
  }
  render() {
    const {
      classes,
      className,
      formNameValue,
    } = this.props;

    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       <Header>
         <HeaderTabs
           tabs={[{
             id: '0',
             name: 'Add entry',
             slug: 'add-entry',
           }, {
             id: '1',
             name: 'All entries',
             slug: 'all-entry',
           }, {
             id: '2',
             name: 'Settings',
             slug: 'settings',
           }]}
           value="add-entry"
           onChange={() => {}} />
       </Header>
       <DashboardHero
         title={formNameValue || 'New Entry'}
         submitRef={this.state.submitRef} />
       <Container width={800} className={classes.container}>
         <AddEntryForm
           onSubmit={this.onAddEntry}
           getSubmitRef={submitRef => this.setState({ submitRef })} />
       </Container>
      </div>
    );
  }
}

AddEntry.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  eateryId: PropTypes.string,
  token: PropTypes.string,
  formNameValue: PropTypes.string,
  getEateryData: PropTypes.func,
  createNewEntry: PropTypes.func,
};

export default compose(
  withRouter,
  withStyles(styles, {
    name: 'AddEntry',
  }),
  connect(states, actions),
)(AddEntry);
