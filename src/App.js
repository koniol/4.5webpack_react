import React from 'react';
import { AppContainer } from 'react-hot-loader';
import TodoList from './components/TodoList';
import style from './App.css';
import Title from './components/Title';
import TodoForm from './components/TodoForm';
import uuid from 'uuid';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishesaaa'
            }, {
                id: 3,
                text: 'feed my cat'
            }],
            addText: '',
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo = (id) => {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    onChangeHandle(event){

        this.setState({addText: event.target.value});

    }
    onSubmit(event){
        event.preventDefault();
        this.addTodo(this.state.addText);
        this.setState({addText: ''});
    }

    render() {
        return (

            <div className={style.TodoApp}>
                <TodoForm send={(event) => this.onSubmit(event)}
                          change={(event) => this.onChangeHandle(event)}
                />
                <div className={style.Task}>
                    <Title title="Task"/>
                    <TodoList list={this.state.data} remove={this.removeTodo}/>
                </div>
                {/*<TodoList list={this.state.data} remove={this.removeTodo.bind(null)}/>*/}
            </div>

        );
    }
}

// if (module.hot) {
//     module.hot.accept('./containers/App', () => {
//         const NextApp = require('./containers/App').default;
//         ReactDOM.render(
//             <AppContainer>
//                 <NextApp />
//             </AppContainer>,
//             document.getElementById('app')
//         );
//     });
// }

export default App;