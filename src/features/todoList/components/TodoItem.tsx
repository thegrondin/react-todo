import react, {useEffect} from 'react';
import * as S from "./styles";
import {Button, List, Tooltip} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import React from "react";
import ItemService, {Item} from "../api/ItemService";

function TodoItem({item, setTodoList} : any) {

    const [_item, setItem] = React.useState({...item});


    useEffect(() => {
        setItem({...item});
    }, [setItem, item])

    const handleDelete = async (e : any) => {

        if (!_item.id) {
            return
        }

        await ItemService.deleteSingle(_item.id);
        const items = await ItemService.getAll();
        setTodoList(items);
    }

    const handleToggle = async (e: any) => {
        const newItem = {..._item, done: !_item.done};
        await ItemService.updateSingle(newItem);
        const items = await ItemService.getAll();
        setItem(newItem);
        setTodoList(items);
    }

    const handleInputUpdate = async (e: any) => {
        const newItem = {..._item, title: e.currentTarget.value};
        setItem(newItem);
    }

    const handleSendEdit = async (e: any) => {
        if (e.key === 'Enter') {
            await ItemService.updateSingle(_item);
            const items = await ItemService.getAll();
            setTodoList(items);
        }
    }

    return (
      <S.TodoItem $isDone={_item.done}>
          <S.TodoCheckbox checked={_item.done} onChange={handleToggle}/>
          <List.Item.Meta
              title={
                  <S.TodoTitleInput
                      value={_item.title}
                      onChange={handleInputUpdate}
                      onKeyPress={handleSendEdit}
                  />}
          />
          <Tooltip title="Delete">
              <Button danger
                      shape="circle"
                      icon={<DeleteOutlined />}
                      onClick={handleDelete}/>
          </Tooltip>
      </S.TodoItem>
    );
}


export default TodoItem;