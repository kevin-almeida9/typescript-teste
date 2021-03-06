import INote from '../../interfaces/INote'

export const requestCreate = (data:any) => ({ type: "REQUEST_CREATE", payload: data })
export const add = (note: INote) => {
    return {
        type: 'ADD',
        payload: note
    }
}

export const update = (id: string, body: string) => {
    return {
        type: 'UPDATE',
        payload: { id: id, body: body }
    }
}
export const requestApiData = () => ({ type: "REQUEST_API_DATA" });
export const receiveApiData = (data: Array<Object>) => ({ type: "RECEIVE_API_DATA", payload: data });

export const requestDelete = (id: string) => ({ type: "REQUEST_DELETE", id: id })
export const remove = (id: string) => {
    return {
        type: 'REMOVE',
        payload: id
    }
}