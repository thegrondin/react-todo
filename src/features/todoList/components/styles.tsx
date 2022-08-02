import styled from 'styled-components';
import {Checkbox, Input, List} from "antd";

export const TodoCheckbox = styled(Checkbox)`
    margin-right: 10px;
    
    .ant-checkbox-inner {
      border-radius: 100%;
      padding: 15px;
    }

    .ant-checkbox-inner::after {
      left: 33%;
    }

    .ant-checkbox-input:checked  + .ant-checkbox-inner {
      background-color: #52c41a;
    }
`

export const TodoItem = styled(List.Item)`
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 16px;
    padding-left: 0;
    background-color: #fafafa;
    border-radius: 15px;
    border: 1px solid #e8e8e8;
  
    &.done {
        background-color: #f6ffed;
    }
`

export const TodoTitleInput = styled(Input)`
    border: none;
    background-color: transparent;
    color: #262626;
    font-weight: bold;
    margin-top: 5px;
  
    &:focus, &:hover {
        outline: none;
        color: #1890ff;
    }
`