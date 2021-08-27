import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function ListComponent(props) {
  const { list, handlerEditItem, handlerDeleteItem } = props;

  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          id={item.id}
          actions={
                        [
                          <Button
                            type="primary"
                            icon={<EditOutlined />}
                            size="large"
                            onClick={() => handlerEditItem(item.id)}
                          />,
                          <Button
                            type="primary"
                            icon={<DeleteOutlined />}
                            size="large"
                            onClick={() => handlerDeleteItem(item.id)}
                          />,
                        ]
                    }
        >
          <List.Item.Meta
            title={item.title}
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
};

ListComponent.defaultProps = {
  list: [],
  handlerEditItem: () => {},
  handlerDeleteItem: () => {},
};

export default ListComponent;
