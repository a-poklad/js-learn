import React from "react";
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function inputC(props) {
    return (
        <label>
            <Input onChange={} size="large" placeholder="Celsius" prefix={<UserOutlined />} />
        </label>
    )
}

export default inputC;