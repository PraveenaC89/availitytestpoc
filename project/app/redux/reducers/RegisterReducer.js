export default function RegisterReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_MEMBER':
      return [
        ...state,
        {
          memberDetails: action.memberDetails,
        },
      ];

    default:
      return state;
  }
}
