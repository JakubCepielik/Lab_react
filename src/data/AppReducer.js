export default function AppReducer(state, action){
    switch(action.type){
        case "rate":
            console.log("Rate action");
            const item = state.find(item => item.id == action.id);
            item.rating = action.rating;
            return [...state];
        case "edit":
            console.log("Edit action");
            return state.map(item =>
                item.id === action.id ? { ...item, ...action.updatedPerson } : item
            );
            case "add":
            console.log("Add action");
            const newPerson = {
                id: state.length + 1,
                ...action.newPerson
            };
            return [...state, newPerson];
        case "delete":
            console.log("Delete action");
            return state.filter(item => item.id !== action.id);
    }
}