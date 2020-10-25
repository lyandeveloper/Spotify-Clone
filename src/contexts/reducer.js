export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    'BQD8QJbsxaajIH0NBJcEixwRlvwHBWSS-1g9gfZgpv6BGLd84SFgGeMnIbl3-gC7A896lqmQ-M25wV702m3FSoe-VOXBJPjpNKWXA7KceuOwF6yQj2H-QrY4mZwhlBjyZFdt50lAIYbZTCJJyuSZCt08hErBKQ',
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

    default:
      return state;
  }
};

export default reducer;
