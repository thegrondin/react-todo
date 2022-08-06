import {client} from "../../../api/utils";


interface Item {
    id?: number;
    title: string;
    createdAt?: Date;
    updatedAt?: Date;
    done: boolean;
}

function convertToItem(rawItem : any) : Item {
    return {
        id: rawItem.id,
        title: rawItem.attributes.title,
        createdAt: new Date(rawItem.attributes.createdAt),
        updatedAt: new Date(rawItem.attributes.updatedAt),
        done: rawItem.attributes.done
    } as Item;
}

async function getAll(): Promise<Item[]> {
    const content = await client("api/todo");

    const result = content.data.map(async (item : any) => {
        return convertToItem(item);
    })

    return Promise.all(result);
}

async function updateSingle(item : Item) {
    const response = await client(`api/todo/${item.id}`, {
        method: 'PUT',
        body: {
            data: {
                ...item
            }
        }
    })

    return convertToItem(response.data);
}

async function createSingle(item : Item) {
    delete item.id;

    const response = await client(`api/todo/`, {
        body: {
            data: {
                ...item
            }
        }
    })

    return convertToItem(response.data);
}

async function deleteSingle(id: number | undefined){
    const response = await client(`api/todo/${id}`, {
        method: 'DELETE'
    })
    return convertToItem(response.data);
}

const ItemService = {
    getAll,
    updateSingle,
    deleteSingle,
    createSingle
}

export default ItemService;
export type {Item};
