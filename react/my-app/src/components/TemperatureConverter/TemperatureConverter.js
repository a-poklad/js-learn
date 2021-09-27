import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import InputC from '../InputC';
import InputF from '../InputF';

class TemperatureConverter extends React.Component {

    state = {
        valueC: 0,
        valueF: 32,
    }

    handleChange = (e) => {
        if(e.target.name === 'celsius') {
            const fahrenheit = (e.target.value * 9/5) + 32;
            this.setState({
                valueC: e.target.value,
                valueF: fahrenheit
            });
        } else {
            const celsius = (e.target.value - 32) * 5/9;
            this.setState({
                valueC: celsius,
                valueF: e.target.value
            });
        }

    }

    render() {
        const {valueC, valueF} = this.state;
        return <div>
            <h1>Temperature Converter!</h1>
            <Row justify="center">
                <Col span={6}>
                    <InputC value={valueC} handleChange={this.handleChange} />
                </Col>
                <Col span={6}>
                    <InputF value={valueF} handleChange={this.handleChange} />
                </Col>
            </Row>
        </div>
    }
};

export  default TemperatureConverter;