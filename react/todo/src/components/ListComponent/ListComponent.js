import React from 'react';
import { List, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';



class ListComponent extends React.Component {

    render() {
        const { list } = this.props;

        return (
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => {
                    return (
                        <List.Item
                            id={item.id}
                            actions={
                                [
                                    <Button type="primary" icon={<EditOutlined />} size='large' onClick={() => this.props.handlerEditItem(item.id)} />,
                                    <Button type="primary" icon={<DeleteOutlined />} size='large' onClick={() => this.props.handlerDeleteItem(item.id)} />
                                ]
                            }
                        >
                            <List.Item.Meta
                                title={item.title}
                            />
                        </List.Item>
                    )
                }}
            />
        );
    }
}

export default ListComponent;