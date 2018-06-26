import React from 'react';
import List from './List';
import '../../public/css/todoList.pcss';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleItemEdit = this.handleItemEdit.bind(this);
    }

    handleAdd() {
        let item = this.refs['todoInput'].value;
        if (item) {
            let list = this.state.list;
            list.push({id: list.length + 1, title: item, status: 1});
            this.setState({list: list}, () => console.log(this.state.list))
        } else {
            alert('不能为空')
        }
    }

    handleItemEdit(id, status) {
        let list = this.state.list;
        list.find(data => data.id === id).status = status;
        this.setState({list: list})
    }

    componentDidMount() {

    }

    render() {
        let {list} = this.state;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={this.handleAdd}>添加</button>
                <div className="cont">
                    <div className="box">
                        全部
                        <List list={list} handleItemEdit={this.handleItemEdit} type={0}/>
                    </div>
                    <div className="box">
                        未删除
                        <List list={list} handleItemEdit={this.handleItemEdit} type={1}/>
                    </div>
                    <div className="box">
                        已删除
                        <List list={list} handleItemEdit={this.handleItemEdit} type={2}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;