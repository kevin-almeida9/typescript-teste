const noteReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'RECEIVE_API_DATA':
            return action.payload

        case 'UPDATE':
            return action.payload


        case 'ADD':

            break;

        case 'REMOVE':
            return state.filter((note:any) => note._id !== action.payload)
            break;

        default:
            return state;

    }

}

export default noteReducer