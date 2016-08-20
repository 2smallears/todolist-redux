import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducers/app-reducer'
import  Todo from './containter/add'
import {Provider} from 'react-redux'
import TodoList from './containter/todoList'
import addMiddle from  './middleware/addtodo'
import todoslist from './middleware/todolist'
import deletetodo from './middleware/deletetodo'
import changestate from './middleware/changestate'

import { createStore, applyMiddleware } from 'redux'

let createStoreWithMiddleWare = applyMiddleware(addMiddle,todoslist,deletetodo,changestate)(createStore);
let store = createStoreWithMiddleWare(reducer);

const App = React.createClass({
    componentDidMount(){
      store.dispatch({type: 'GETTODOS'});
    },
    render: function () {
        return <div>
            <Todo />
            <TodoList />
        </div>;
    }
});

ReactDOM.render(
    <Provider  store={store}>
        <App/>
    </Provider>, document.getElementById('root'));