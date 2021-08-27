import React from 'react';
import {
  Button, Col, Input, Row,
} from 'antd';
import { InteractionOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function TodoInput(props) {
  const {
    isUpdate, updateId, inputValue, handleChangeInput, handlerUpdateItem, handlerCreateItem,
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
                placeholder="Type todo Item"
                value={inputValue}
                onChange={handleChangeInput}
              />
            </label>
            {isUpdate
              ? (
                <Button
                  type="primary"
                  onClick={() => handlerUpdateItem(inputValue, updateId)}
                >
                  Update
                </Button>
              )
              : (
                <Button
                  type="primary"
                  onClick={() => handlerCreateItem(inputValue)}
                >
                  Create
                </Button>
              )}

          </div>
        </Col>
      </Row>
    </>
  );
}

TodoInput.propTypes = {
  isUpdate: PropTypes.bool,
  updateId: PropTypes.string,
  inputValue: PropTypes.string,
  handleChangeInput: PropTypes.func,
  handlerUpdateItem: PropTypes.func,
  handlerCreateItem: PropTypes.func,
};

TodoInput.defaultProps = {
  isUpdate: false,
  updateId: '',
  inputValue: '',
  handleChangeInput: () => {},
  handlerUpdateItem: () => {},
  handlerCreateItem: () => {},
};

export default TodoInput;
