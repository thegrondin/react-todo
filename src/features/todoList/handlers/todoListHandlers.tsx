import React from 'react';
import {CheckboxChangeEvent} from "antd/es/checkbox";
import ItemService, {Item} from "../api/ItemService";

type ReactSetDispatch = React.Dispatch<React.SetStateAction<Item[]>>

export const handleToggleItem = async (
    e : CheckboxChangeEvent,
    item: Item,
    setTodoList : ReactSetDispatch) => {
    const newItem = {...item, done: e.target.checked};
    await ItemService.updateSingle(newItem);
    const items = await ItemService.getAll();
    setTodoList(items);
}

export const handleCreateItem = async (setTodoList : ReactSetDispatch) => {
    const newItem = {
        title: 'New Item',
        done: false
    } as Item;

    await ItemService.createSingle(newItem);
    const items = await ItemService.getAll();
    setTodoList(items);
}

export const handleRefresh = async (setTodoList : ReactSetDispatch) => {
    const items = await ItemService.getAll();
    setTodoList(items);
}

export const handleDeleteItem = async (setTodoList: ReactSetDispatch, id?: number) => {
    if (!id) {
        return
    }

    await ItemService.deleteSingle(id);
    const items = await ItemService.getAll();
    setTodoList(items);
}

// Seperated state for input
export const handleInputUpdate = (
    e : React.ChangeEvent<HTMLInputElement>,
    item: Item,
    setTodoList : ReactSetDispatch,
    todoList : Item[]) => {

    const newTodoList = todoList.map(todo => {
        if (todo.id === item.id) {
            return {...todo, title: e.currentTarget.value};
        }
        return todo;
    })

    setTodoList(newTodoList);
    return;
}

export const handleSendEdit = async (
    e: React.KeyboardEvent<HTMLInputElement>,
    item: Item,
    setTodoList: ReactSetDispatch) => {
    if (e.key === 'Enter') {
        await ItemService.updateSingle(item);
        const items = await ItemService.getAll();
        setTodoList(items);
    }
}