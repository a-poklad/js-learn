import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import TodoInput from './components/TodoInput';
import {Col, Row, Typography} from "antd";
import ListComponent from "./components/ListComponent";
import { v1 as uuidv1 } from 'uuid';

const { Title } = Typography;


class App extends React.Component {

    state = {
        list: (localStorage.getItem('list') != null) ? JSON.parse(localStorage.getItem('list')) : [],
        updateFlag: false,
        updateId: null,
        inputValue: ''
    }

    handleChangeInput = (e) => {
        const value = e.target.value;
        this.setState({inputValue: value});
    }

    handlerCreateItem = (value) => {
        this.setState((prevState) => {
            const listArr = [...prevState.list, {
                id: uuidv1(),
                title: value
            }];
            localStorage.setItem('list', JSON.stringify(listArr));
            return {
                list: listArr,
                inputValue: ''
            }
        });
    }

    handlerUpdateItem = (value, id) => {
        this.setState((prevState) => {
            const listArr = prevState.list.map((el) => {
                if(el.id === id) {
                    el.title = this.state.inputValue;
                }
                return el;
            })
            localStorage.setItem('list', JSON.stringify(listArr));
            return {
                list: listArr,
                inputValue: '',
                updateFlag: false
            }
        });

    }

    handlerDeleteItem = (id) => {
        console.log(id)
        this.setState((prevState) => {
            const idIndex = prevState.list.findIndex((el) => el.id === id);

            const listArr = [...prevState.list.slice(0, idIndex), ...prevState.list.slice(idIndex + 1)];
            localStorage.setItem('list', JSON.stringify(listArr));
            return {
                list: listArr,
            }
        });
    }

    handlerEditItem = (id) => {
        this.setState((prevState) => {
            const idIndex = prevState.list.findIndex((el) => el.id === id);

            return {
                updateFlag: true,
                inputValue: prevState.list[idIndex].title,
                updateId: prevState.list[idIndex].id,
            }
        })
    }

    render() {
        return <div className="App">
            <Title className="App-h1">Todo</Title>
            <TodoInput
                inputValue={this.state.inputValue}
                handleChangeInput={this.handleChangeInput}
                handlerCreateItem={this.handlerCreateItem}
                handlerUpdateItem={this.handlerUpdateItem}
                updateFlag={this.state.updateFlag}
                updateId={this.state.updateId}
            />
            <Row>
                <Col span={12} offset = {6} md={{ span: 16, offset: 4 }} sm={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                    <div className="App-list-container">
                        <ListComponent
                            list={this.state.list}
                            handlerDeleteItem={this.handlerDeleteItem}
                            handlerEditItem={this.handlerEditItem}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    }
}

export default App;
