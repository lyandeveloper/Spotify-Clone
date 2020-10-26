export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  //'BQD8QJbsxaajIH0NBJcEixwRlvwHBWSS-1g9gfZgpv6BGLd84SFgGeMnIbl3-gC7A896lqmQ-M25wV702m3FSoe-VOXBJPjpNKWXA7KceuOwF6yQj2H-QrY4mZwhlBjyZFdt50lAIYbZTCJJyuSZCt08hErBKQ',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
