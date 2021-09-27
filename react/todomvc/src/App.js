import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import { v1 as uuidv1 } from 'uuid';
import TodoInput from './components/TodoInput';
import ListComponent from './components/ListComponent';

class App extends React.Component {
    state = {
      list: [],
      // isUpdate: false,
      // updateId: null,
      inputValue: '',
    }

    componentDidMount() {
      this.setState({ list: (localStorage.getItem('list') != null) ? JSON.parse(localStorage.getItem('list')) : [] });
    }

    handleChangeInput = (e) => {
      const { value } = e.target;
      this.setState({ inputValue: value });
    }

    handlerCreateItem = (e, value) => {
      if (e.charCode === 13) {
        if (value !== '') {
          this.setState((prevState) => {
            const list = [...prevState.list, {
              id: uuidv1(),
              title: value,
            }];
            localStorage.setItem('list', JSON.stringify(list));
            return {
              list,
              inputValue: '',
            };
          });
        }
      }
    }

    handlerUpdateItem = (value, id) => {
      const { inputValue } = this.state;
      this.setState((prevState) => {
        const list = prevState.list.map((el) => {
          const copyEl = { ...el };
          if (el.id === id) {
            copyEl.title = inputValue;
          }
          return copyEl;
        });
        localStorage.setItem('list', JSON.stringify(list));
        return {
          list,
          inputValue: '',
          isUpdate: false,
        };
      });
    }

    handlerDeleteItem = (id) => {
      this.setState((prevState) => {
        const idIndex = prevState.list.findIndex((el) => el.id === id);
        const list = [...prevState.list];
        list.splice(idIndex, 1);
        localStorage.setItem('list', JSON.stringify(list));
        return {
          list,
        };
      });
    }

    handlerEditItem = (id) => {
      this.setState((prevState) => {
        const idIndex = prevState.list.findIndex((el) => el.id === id);

        return {
          isUpdate: true,
          inputValue: prevState.list[idIndex].title,
          updateId: prevState.list[idIndex].id,
        };
      });
    }

    render() {
      const {
        list, inputValue,
      } = this.state;
      return (
        <div className="App">
          <TodoInput
            inputValue={inputValue}
            handlerCreateItem={this.handlerCreateItem}
            handleChangeInput={this.handleChangeInput}
            handlerUpdateItem={this.handlerUpdateItem}
            // isUpdate={isUpdate}
            // updateId={updateId}
          />
          <Row>
            <Col
              span={12}
              offset={6}
              md={{ span: 16, offset: 4 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
            >
              <div className="App-list-container">
                <ListComponent
                  list={list}
                  handlerDeleteItem={this.handlerDeleteItem}
                  handlerEditItem={this.handlerEditItem}
                />
              </div>
            </Col>
          </Row>
        </div>
      );
    }
}

export default App;
