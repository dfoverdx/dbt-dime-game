import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default class DecisionTypeChooser extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2 className='col-xs-12'>Which decision are you trying to make?</h2>
                <Button className='app-btn' onClick={() => this.props.onChoose('ask')}>
                    <span className='decision-type-text'>
                        Do I <span className='text-primary'>ask</span> someone for something?  How assertively?
                    </span>
                </Button>
                <Button className='app-btn' onClick={() => this.props.onChoose('sayNo')}>
                    <span className='decision-type-text'>
                        Do I <span className='text-primary'>decline</span> someone's request?  How assertively?
                    </span>
                </Button>
            </div>
        );
    }
}

DecisionTypeChooser.propTypes = {
    onChoose: PropTypes.func.isRequired
};