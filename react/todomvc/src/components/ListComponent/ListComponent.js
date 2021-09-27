import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function ListComponent(props) {
  const {
    list, handlerEditItem, handlerDeleteItem, inputEditValue, handlerUpdateItem,
  } = props;

  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          className="App-list-item"
          id={item.id}
          onDoubleClick={() => handlerUpdateItem()}
          actions={
                        [
                          <Button
                            type="primary"
                            icon={<EditOutlined />}
                            size="large"
                            onClick={() => handlerEditItem(item.id)}
                          />,
                          <Button
                            className="App-list-btn-delete"
                            type="primary"
                            icon={<DeleteOutlined />}
                            size="large"
                            onClick={() => handlerDeleteItem(item.id)}
                          />,
                        ]
                    }
        >
          <List.Item.Meta
            className="App-list-item-meta"
            title={item.title}
          />
          <Input
            value={inputEditValue}
            className="App-list-edit-input"
            placeholder="Basic usage"
          />
        </List.Item>
      )}
    />
  );
}

ListComponent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  handlerEditItem: PropTypes.func,
  handlerDeleteItem: PropTypes.func,
  handlerUpdateItem: PropTypes.func,
  inputEditValue: PropTypes.string,
};

ListComponent.defaultProps = {
  list: [],
  handlerEditItem: () => {},
  handlerDeleteItem: () => {},
  handlerUpdateItem: () => {},
  inputEditValue: '',
};

export default ListComponent;
