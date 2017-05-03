import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import Results from '../classes/results';
import Prompts from '../classes/prompts';

export default class Result extends React.Component {
    render() {
        let results = Results[this.props.decisionType],
            prompts = Prompts[this.props.decisionType],
            boldYesAnswers = this.props.decisionType === 'ask',
            answers = this.props.answers.map((a, i) => {
                    let weight = boldYesAnswers ^ a !== 'yes' ? 'bold' : 'normal';
                    return (
                        <ListGroupItem key={'prompt' + i} style={{fontWeight: weight}}>
                            <div className='col-xs-11 col-lg-10'>{prompts[i].question}</div>
                            <div className={'col-xs-1 coi-lg-2 text-' + (a === 'yes' ? 'success' : 'danger')}>{a}</div>
                            <div className='clearfix' />
                        </ListGroupItem>
                    );
                });

        return (
            <div className='col-xs-12'>
                <h1 className='pull-left'>
                    <span className='text-muted'>Result: </span>
                    {results[this.props.dimes]}
                </h1>
                <Button onClick={this.props.onRestart} bsSize='large' className='pull-right' style={{marginTop: 16}}>Restart</Button>
                <div className='clearfix' />
                <div className='panel panel-primary' style={{marginTop: 40}}>
                    <div className='panel-heading'>You answered</div>
                    <ListGroup>
                        {answers}
                    </ListGroup>
                </div>
            </div>
        );
    }
}

Result.propTypes = {
    dimes: PropTypes.number.isRequired,
    answers: PropTypes.array.isRequired,
    decisionType: PropTypes.string.isRequired,
    onRestart: PropTypes.func.isRequired,
};