

const createStore = (reducer) => {
    let state;

    let listeners = [];
    const getState = () => state;
    const disptach = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    }
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((list) => list != listener);
        }
    };
    return {
        disptach, subscribe, getState
    }

}

//redux's applyMiddleware implementation sample

function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice()
    middlewares.reverse()
    let dispatch = store.dispatch
    middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
    return Object.assign({}, store, { dispatch })
  }


 