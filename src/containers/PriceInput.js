import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const Span = styled.span`
    position: relative;
    margin-right: -20px;
`;

const Input = styled.input`
    padding-left: 20px;
    text-align: left;
`;

class PriceInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value || '' };
        this.handleEditPrice = this.handleEditPrice.bind(this);
    }

    handleEditPrice(event) {
        const { id } = this.props
        const newValue = event.target.value;

        if (newValue === this.state.value) return;

        this.setState({ value: newValue });
        this.props.dispatch(actions.editPrice(id, newValue));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value === this.props.value) return;
        this.setState({ value: this.props.value });
    }

    render() {
        return (
            <div>
                <Span>€</Span>
                <Input
                    type='number'
                    min='0.00'
                    value={this.state.value}
                    onChange={this.handleEditPrice}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    edit: state.data.edit,
})

export default connect(mapStateToProps)(PriceInput);
