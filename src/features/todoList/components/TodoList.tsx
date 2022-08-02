import React, {useEffect} from 'react';
import {Button, Checkbox, Input, List} from "antd";
import {Item} from "../api/ItemService";
import {
    handleCreateItem,
    handleDeleteItem,
    handleRefresh,
    handleToggleItem,
    handleSendEdit,
    handleInputUpdate
} from "../handlers/todoListHandlers";

function TodoList() {

    const [todoList, setTodoList] = React.useState([] as Item[]);

    useEffect(() => {
        (async () => {
            await handleRefresh(setTodoList);
        })();
    }, [])

    return (
        <div>
            <List
                size="large"
                header={<>
                    <h2>Your list</h2>
                    <Button type="primary" onClick={() => handleCreateItem(setTodoList)}>Add new Item</Button>
                    <Button onClick={() => handleRefresh(setTodoList)}>Refresh</Button>
                </>}
                bordered
                dataSource={todoList}
                renderItem={item => (
                    <List.Item>
                        <Checkbox checked={item.done} onChange={(e) => handleToggleItem(e, item, setTodoList)}/>
                        <List.Item.Meta
                            title={
                            <Input
                                value={item.title}
                                onChange={ (e) => handleInputUpdate(e, item, setTodoList, todoList)}
                                onKeyPress={(e) => handleSendEdit(e, item, setTodoList)}
                            />}
                        />
                        <Button danger onClick={(e) => handleDeleteItem(setTodoList, item.id)}>Delete</Button>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default TodoList;