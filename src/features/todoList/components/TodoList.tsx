import React, {useEffect} from 'react';
import * as S from './styles';
import {Button, Divider, List, Tooltip} from "antd";
import ItemService, {Item} from "../api/ItemService";
import UserCard from "../../user/components/UserCard";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todoList, setTodoList] = React.useState([] as Item[]);

    const handleCreate = async (e: any) => {
        const newItem = {
            title: 'New Item',
            done: false
        } as Item;

        await ItemService.createSingle(newItem);
        const items = await ItemService.getAll();
        setTodoList(items);
    }

    const handleRefresh = async (e: any) => {
        const items = await ItemService.getAll();
        setTodoList(items);
    }

    useEffect(() => {
        (async () => {
            await handleRefresh(null);
        })();
    }, [])


    return (
        <div>
            <UserCard/>
            <Divider />
            <List
                size="large"
                header={<>
                    <h2>Your list</h2>
                    <Button type="primary" onClick={handleCreate}>Add new Item</Button>
                    <Button onClick={handleRefresh}>Refresh</Button>
                </>}
                bordered
                dataSource={todoList}
                renderItem={item => (
                    <TodoItem item={item} setTodoList={setTodoList}/>
                )}
            />
        </div>
    );
}

export default TodoList;