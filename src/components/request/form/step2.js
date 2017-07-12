import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import { Grid, Header, Label, Icon } from 'semantic-ui-react';
import { actions, Control } from 'react-redux-form';

import SemanticInput from '../../semanticInput'

import '../../../dayPicker.css';

@connect((store) => {
  return {
    dateStart: store.availabilityRequestForm.dateStart,
    dateEnd: store.availabilityRequestForm.dateEnd,
  };
})
export default class RequestFormStep2 extends Component {

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, {from: this.props.dateStart, to: this.props.dateEnd});
    this.props.dispatch(actions.change('availabilityRequestForm.dateStart', range.from))
    this.props.dispatch(actions.change('availabilityRequestForm.dateEnd', range.to))
  };
  handleResetClick = e => {
    e.preventDefault();
    this.props.dispatch(actions.change('availabilityRequestForm.dateStart', null))
    this.props.dispatch(actions.change('availabilityRequestForm.dateEnd', null))
  };

  render() {
    const { dateStart, dateEnd } = this.props;

    return (
      <Grid>
        <Grid.Column computer='8' tablet='16' mobile='16'>
          <Header size="tiny">
          {!dateStart && !dateEnd && <span>Select the <strong>first day</strong> you are available to arrive.</span>}
          {dateStart && !dateEnd && <span>Select the <strong>last day</strong> you are available to arrive.</span>}
          {dateStart && dateEnd &&
            <div>
              Arriving any day between:

              <Label>
                <Icon name='calendar' />
                {moment(dateStart).format('L')}
                {' '}
                -
                {' '}
                {moment(dateEnd).format('L')}
                <Icon name='delete' onClick={this.handleResetClick}/>
              </Label>
            </div>
          }
          </Header>
          <DayPicker
            numberOfMonths={1}
            selectedDays={[dateStart, { from: dateStart, to: dateEnd }]}
            onDayClick={this.handleDayClick}
            fixedWeeks
            pagedNavigation
          />
        </Grid.Column>
        <Grid.Column computer='8' tablet='16' mobile='16'>
          <Control
            model=".stayLength"
            component={SemanticInput}
            controlProps={{
              label: 'Length of stay (in days)'
            }}
          />
        </Grid.Column>
      </Grid>
    )
  };
};
