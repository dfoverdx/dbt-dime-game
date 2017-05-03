import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Jumbotron, Grid, Navbar } from 'react-bootstrap';

import DecisionTypeChooser from './decision-type-chooser';
import Prompt from './prompt';
import Result from './result';

import { PromptCount } from '../classes/prompts';
import '../styles/app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dimes: 0,
            answers: new Array(PromptCount).fill(null),
            stage: 'pickDecisionType',
            decisionType: null,
        }

        this.handleDecisionTypeChoice = this.handleDecisionTypeChoice.bind(this);
        this.handlePromptsDone = this.handlePromptsDone.bind(this);
        this.handlePromptAnswered = this.handlePromptAnswered.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    handleDecisionTypeChoice(choice) {
        this.setState({
            decisionType: choice,
            stage: 'prompts',
        });
    }

    handlePromptsDone() {
        this.setState({
            stage: 'showResults',
        });
    }

    handlePromptAnswered(index, answer, addDime) {
        let answers = this.state.answers.slice();
        answers[index] = answer;

        this.setState({
            answers: answers,
            dimes: this.state.dimes + (addDime ? 1 : 0),
        });
    }

    handleRestart() {
        this.setState({
            dimes: 0,
            answers: new Array(PromptCount).fill(null),
            stage: 'pickDecisionType',
            decisionType: null,
        });
    }

    render() {
        let q = null,
            jumboTitle = this.state.decisionType === null ? 'Do I ask?  Do I say no?' :
                         this.state.decisionType === 'ask' ? 'Do I ask?  How assertively?': 'Do I say no?  How assertively?',
            jumboDesc = null,
            jumboHiddenXs = 'hidden-xs';

        switch (this.state.stage) {
            case 'pickDecisionType':
                q = <DecisionTypeChooser onChoose={this.handleDecisionTypeChoice} />;
                jumboHiddenXs = null;
                jumboDesc = (
                    <p>
                        If you have difficulty deciding how assertively to make a request or to decline someone else's
                        request, try using the <i>Dime Game</i> from the DBT Interpersonal Effectiveness module.  We'll
                        ask a series of yes-or-no questions.  At the end, we'll tally the results, and give you guidance
                        on how strongly to ask or decline.
                    </p>
                );
                break;

            case 'prompts':
                q = <Prompt key='prompts' onPromptAnswered={this.handlePromptAnswered} onDone={this.handlePromptsDone}
                        dimes={this.state.dimes} decisionType={this.state.decisionType} />;
                break;

            case 'showResults':
                q = <Result dimes={this.state.dimes} decisionType={this.state.decisionType} answers={this.state.answers}
                        onRestart={this.handleRestart} />
                break;

            default:
                break;
        }

        let links = [(
                <li key='link1'>
                    <a className='navbar-link' href="https://borderlinebabble.com/2015/12/08/dbt-skills-group-interpersonal-effectiveness-weeks-5-6/">
                        Dime Game Worksheet
                    </a>
                </li>
            ),(
                <li key='link2'>
                    <a className='navbar-link' href="https://www.amazon.com/Skills-Training-Handouts-Worksheets-Second/dp/1572307811/ref=sr_1_2?ie=UTF8&qid=1493762186&sr=8-2&keywords=dbt+workbook">
                        DBT® Skills Training Handouts and Worksheets, Second Edition
                    </a>
                </li>
            )];

        return (
            <div className='App'>
                <DocumentMeta {...meta} />
                <Jumbotron className={ jumboHiddenXs } style={{textAlign: 'left'}}>
                    <Grid bsClass='container'>
                        <h1>{jumboTitle}</h1>
                        {jumboDesc}
                    </Grid>
                </Jumbotron>
                <Grid bsStyle='container' className='app-container'>
                    {q}
                </Grid>
                <Navbar fixedBottom className='hidden-xs'>
                    <div className='navbar-text' style={{marginLeft: 0}}>
                        <ul className='list-inline hidden-sm'>
                            {links}
                        </ul>
                        <ul className='list-unstyled visible-sm'>
                            {links}
                        </ul>
                    </div>
                    <div className='navbar-right navbar-text' style={{marginRight: 0, marginLeft: 0}}>
                        <ul className='list-inline'>
                            <li>
                                <a className='navbar-link' href="https://github.com/dfoverdx/dbt-dime-game">Source Code</a>
                            </li>
                            <li><a href='/'>Jordan Hitch</a> © 2017</li>
                        </ul>
                    </div>
                </Navbar>
            </div>
        );
    }
}

const meta = {
    viewport: 'width=device-width, initial-scale:1.0, maximum-scale=1',
    description: 'Use the DBT "Dime Game" to determine how forcefully to ask or say no to a request',
    canonical: 'http://dfdx.us/dbt-dime-game',
    meta: {
        name: {
            keywords: 'dbt,dime game,interpersonal effectiveness',
            author: 'Jordan Hitch'
        }
    },
    title: 'DBT Dime Game'
};

export default App;
