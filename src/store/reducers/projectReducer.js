const initState = {
    projects: [
        { id: "1", title: "help find a peach", content: "blar blah bla" },
        { id: "2", title: "help cook the peach", content: "blar blah bla" },
        { id: "3", title: "help to eat peach", content: "blar blah bla" }
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': console.log('created project', action.project);
        return state;
        case 'CREATE_PROJECT_ERROR': console.log('created project error', action.err);
        return state;
        default:
        return state;
    }
}

export default projectReducer;