const navigations = () => {
    const items = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "User Dashboard",
            url: "/user/dashboard"
        },
        {
            name: "Log In",
            url: "/"
        }
    ];
    const selected = items[0];
    return ({
        items, selected
    })
};

const initialState = navigations.bind(this)();

const reducerAdminNavigation = (state = initialState, action) => {
    switch(action.type) {
        case "ALTER_SELECTED_NAVIGATION":
            const path = state.items.find(path => path.url === action.payload);
            state = Object.assign({}, state, {selected: path});
            return state;
        default:
            return state
    }
};

export default reducerAdminNavigation;