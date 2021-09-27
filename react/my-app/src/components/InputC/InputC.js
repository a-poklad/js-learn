import React from "react";
import { Input } from 'antd';
import { InteractionOutlined } from '@ant-design/icons';

function inputC(props) {
    return (
        <label>
            Celsius
            <Input
                size="large"
                placeholder="Celsius"
                prefix={<InteractionOutlined />}
                type='number'
                name="celsius"
                value={props.value}
                onChange={props.handleChange}
            />
        </label>
    )
}

export default inputC;