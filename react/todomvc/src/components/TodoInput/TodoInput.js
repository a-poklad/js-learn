import React from 'react';
import {
  Col, Input, Row,
} from 'antd';
import { InteractionOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function TodoInput(props) {
  const {
    inputValue, handlerCreateItem, handleChangeInput,
  } = props;

  return (
    <>
      <Row>
        <Col
          justify="center"
          span={12}
          offset={6}
          md={{ span: 16, offset: 4 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <div className="create-field">
            <label htmlFor="inputCreate">
              <Input
                name="create"
                size="large"
                prefix={<InteractionOutlined />}
                id="inputCreate"
                type="text"
                value={inputValue}
                placeholder="Type Item"
                onChange={handleChangeInput}
                onKeyPress={(e) => handlerCreateItem(e, inputValue)}
              />
            </label>
          </div>
        </Col>
      </Row>
    </>
  );
}

TodoInput.propTypes = {
  inputValue: PropTypes.string,
  handlerCreateItem: PropTypes.func,
  handleChangeInput: PropTypes.func,
};

TodoInput.defaultProps = {
  inputValue: '',
  handlerCreateItem: () => {},
  handleChangeInput: () => {},
};

export default TodoInput;
