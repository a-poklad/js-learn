import React from "react";
import { Input } from 'antd';
import { InteractionOutlined } from '@ant-design/icons';

function inputF(props) {
    return (
        <label>
            Fahrenheit
            <Input
                size="large"
                placeholder="Fahrenheit"
                prefix={<InteractionOutlined />}
                type='number'
                name="fahrenheit"
                value={props.value}
                onChange={props.handleChange}
            />
        </label>
    )
}

export default inputF;