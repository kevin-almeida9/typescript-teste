const noteReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'RECEIVE_API_DATA':
            return action.payload

        case 'UPDATE':
            return action.payload


        case 'ADD':
            const {
                _id,
                title,
                body
            } = action.payload
            return [...state, { _id, title, body }]

        case 'REMOVE':
            return state.filter((note: any) => note._id !== action.payload)
        default:
            return state;

    }

}

export default noteReducer