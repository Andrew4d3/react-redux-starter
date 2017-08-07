export const actions = {
  sayHelloWorld: () => {
    return {
      type: 'HELLO_WORLD'
    }
  }
};

const ACTION_HANDLERS = {
  HELLO_WORLD: (state, action) => {
    alert('Hello from Redux');
    return {
      ...state
    }
  }
}

export const initialState = {
  currentTime: new Date()
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
