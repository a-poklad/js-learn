import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import { InteractionOutlined } from '@ant-design/icons';

class TodoInput extends React.Component {

    // state = {
    //     inputValue: '',
    // }

    // handleChangeInput = (e) => {
    //     const value = e.target.value;
    //     this.setState({inputValue: value});
    // }


    render() {
        return <>
            <Row>
                <Col justify="center" span={12} offset = {6} md={{ span: 16, offset: 4 }} sm={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                    <div className="create-field">
                        <label>
                            <Input
                                name="create"
                                size="large"
                                prefix={<InteractionOutlined />}
                                type="text"
                                placeholder="Type todo Item"
                                value={this.props.inputValue}
                                onChange={this.props.handleChangeInput}
                            />
                        </label>
                        {this.props.updateFlag ?
                            <Button
                                type="primary"
                                onClick={() => this.props.handlerUpdateItem(this.props.inputValue, this.props.updateId)}
                            >
                                Update
                            </Button>
                            :
                            <Button
                                type="primary"
                                onClick={() => this.props.handlerCreateItem(this.props.inputValue)}
                            >
                                Create
                            </Button>
                        }

                    </div>
                </Col>
            </Row>
        </>
    }
}

export default TodoInput;