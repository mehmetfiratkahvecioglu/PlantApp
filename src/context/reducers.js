const reducers = (state, action) => {
  var today = new Date();
  var curHr = today.getHours();

  let message = '';

  if (curHr < 12 && curHr >= 5) {
    message = 'Good Morning 🌞';
  } else if (curHr >= 12 && curHr < 18) {
    message = 'Good Afternoon! ⛅';
  } else if (curHr >= 18 && curHr < 24) {
    message = 'Good Evening! 🌙';
  } else {
    message = 'Good Night! 🌘';
  }

  switch (action.type) {
    case 'ADD_LIST':
      return {...state, name: action.payload.name};

    case 'Change_Message':
      return {...state, message: message};

    default:
      return state;
  }
};

export default reducers;
