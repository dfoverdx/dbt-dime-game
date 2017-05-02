import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Prompts from '../classes/prompts';

export default class Prompt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionIndex: 0,
        };

        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(answer, addDime) {
        this.props.onPromptAnswered(this.state.questionIndex, answer, addDime);

        let qi = this.state.questionIndex + 1;
        if (qi === Prompts[this.props.decisionType].length) {
            this.props.onDone();
        } else {
            this.setState({
                questionIndex: qi,
            });
        }
    }

    render() {
        let question = Prompts[this.props.decisionType][this.state.questionIndex],
            yesAddDime = this.props.decisionType === 'ask',
            amount = this.props.dimes * 10,
            amountColor = '#xxx'.replace(/x/g, (10 - this.props.dimes).toString(16));

        return (
            <div>
                <div style={styles.centeredContainer}>
                    <h2 className='text-primary' style={{fontWeight: 'bold'}}>{question.name}</h2>
                    <h3>{question.question}</h3>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button className='app-btn' onClick={() => this.handleChoice('yes', yesAddDime)}>
                        <span className='prompt-text text-success'>Yes</span>
                    </Button>
                    <Button className='app-btn' onClick={() => this.handleChoice('no', !yesAddDime)}>
                        <span className='prompt-text text-danger'>No</span>
                    </Button>
                </div>
                <div style={styles.centeredContainer}>
                    <h3 className='text-muted'>
                        Question: {this.state.questionIndex + 1} / {Prompts[this.props.decisionType].length}
                    </h3>
                    {
                        // <h3 style={{color: amountColor}}>
                        //     Amount: $0.{("0" + amount).slice(-2)}
                        // </h3>
                    }
                </div>
            </div>
        );
    }
}

const styles = {
    centeredContainer: {
        textAlign: 'left',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'inline-block',
    },
}

Prompt.propTypes = {
    onPromptAnswered: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    decisionType: PropTypes.string.isRequired,
    dimes: PropTypes.number.isRequired,
};