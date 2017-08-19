const asynchronousCall = () => new Promise((resolve) => {
  setTimeout(function () {
    resolve({ message: "Async call complete!"});
  }, 1000);
});

export const actions = {
  sayHelloWorld: () => {
    alert("Dispatching Redux Action!");
    return {
      type: 'HELLO_WORLD'
    };
  },
  updateTime: () => {
    const now = new Date();
    return {
      type: 'UPDATE_TIME',
      payload: { time: now }
    };
  },
  triggerRequest: () => {
    // TODO
  }
};

const ACTION_HANDLERS = {
  HELLO_WORLD: (state, action) => {
    return {
      ...state,
      message: "Redux is fun!"
    };
  },
  UPDATE_TIME: (state, action) => {
    return {
      ...state,
      currentTime: action.payload.time
    };
  }
}

export const initialState = {
  currentTime: new Date(),
  message: "",
  asyncMessage: "",
  isLoading: ""
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
