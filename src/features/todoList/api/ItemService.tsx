

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
    const response = await fetch('http://localhost:1337/api/todo')
    const content = await response.json();

    const result = content.data.map(async (item : any) => {
        return convertToItem(item);
    })

    return Promise.all(result);
}

async function updateSingle(item : Item) {
    const request = await fetch(`http://localhost:1337/api/todo/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                ...item
            }
        })
    });

    const response = await request.json();
    return convertToItem(response.data);
}

async function createSingle(item : Item) {

    delete item.id;
    const request = await fetch('http://localhost:1337/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                data: {
                    ...item
                }
            }
        )
    });
    const response = await request.json();
    return convertToItem(response.data);

}

async function deleteSingle(id : number){
    const request = await fetch(`http://localhost:1337/api/todo/${id}`, {
        method: 'DELETE'
    });

    const response = await request.json();
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
