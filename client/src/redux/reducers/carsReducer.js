const initialData = {
  cars: [],
};

export const carsReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_CARS": {
      return {
        ...state,
        cars: action.payload, // Assuming payload is an array of cars
      };
    }

    default:
      return state;
  }
};
