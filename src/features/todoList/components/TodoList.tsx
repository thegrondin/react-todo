import React, {useEffect} from 'react';
import * as S from './styles';
import { DeleteOutlined } from '@ant-design/icons';
import {Button, List, Tooltip} from "antd";
import {Item} from "../api/ItemService";
import {
    handleCreateItem,
    handleDeleteItem,
    handleRefresh,
    handleToggleItem,
    handleSendEdit,
    handleInputUpdate
} from "../handlers/todoListHandlers";

// Input, useForm.
// TodoItem dans son propre component

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
                    <S.TodoItem $isDone={item.done}>
                        <S.TodoCheckbox checked={item.done} onChange={(e) => handleToggleItem(e, item, setTodoList)}/>
                        <List.Item.Meta
                            title={
                            <S.TodoTitleInput
                                value={item.title}
                                onChange={(e) => handleInputUpdate(e, item, setTodoList, todoList)}
                                onKeyPress={(e) => handleSendEdit(e, item, setTodoList)}
                            />}
                        />
                        <Tooltip title="Delete">
                            <Button danger
                                    shape="circle"
                                    icon={<DeleteOutlined />}
                                    onClick={(e) => handleDeleteItem(setTodoList, item.id)}/>
                        </Tooltip>
                    </S.TodoItem>
                )}
            />
        </div>
    );
}

export default TodoList;