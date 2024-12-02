export default function AppReducer(state, action) {
    switch (action.type) {
        case "rate":
            console.log("Rate action");
            return state.map(item =>
                item.id === action.id ? { ...item, rating: action.rating } : item
            );
        case "edit":
            console.log("Edit action");
            return state.map(item =>
                item.id === action.id ? { ...item, ...action.updatedPerson } : item
            );
        case "delete":
            console.log("Delete action");
            return state.filter(item => item.id !== action.id);
        default:
            console.error(`Unknown action type: ${action.type}`);
            return state;
    }
}
