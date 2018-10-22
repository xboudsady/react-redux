const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Pokem ipsum dolor sit amet in a world we must defend Magby Oshawott Gothitelle Rotom Cacturne. Soul Badge Dewott Quilava Sawk Plain Badge Duskull Ruby."
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Steel Shaymin Terrakion Pawniard Poliwrath Regice prepare for trouble."
    },
    {
      id: "3",
      title: "A Helix Fossil was Found",
      body: "Boulder Badge Wobbuffet Suicune Yanmega Zorua Starly Storm Badge. "
    }
  ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        })
        return {
            ...state, 
            posts: newPosts
        }

    }
    return state;
}

export default rootReducer;