export const reducer = (state, action) => {
    if (action.type === 'Add_Button' || action.type === 'Add_Input' || action.type === 'Add_Paragraph') {
      return [...state, action.payload];
    }
    if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: newPeople };
    }
    return state;
  };
  