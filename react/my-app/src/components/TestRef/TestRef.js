import React from "react";
import { Input } from 'antd';
import { InteractionOutlined } from '@ant-design/icons';

const TestRef = React.forwardRef((props, ref) => (
  <label>
    Fahrenheit
    <Input
      size="large"
      placeholder="focus"
      prefix={<InteractionOutlined />}
      type='number'
      ref={ref}
    />
  </label>
));


export default TestRef;
