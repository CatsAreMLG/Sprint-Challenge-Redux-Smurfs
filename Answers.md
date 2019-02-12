1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 - actions objects made by action creaters that go to reducers to update the global store.
 - reducers are functions that update the global store from actions.
 - store is a global state
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
 - application state can be accessed and changed from anywhere whereas component state can be only changed in the component file. When you need to pass in one thing through a long list of props then use global state.
4.  What is middleware?
It is a way to access the actions going to the reducer before they get there.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
thunk is a way to dispatch things without calling store.dispatch, you can not dispatch from action creaters.
6.  Which `react-redux` method links up our `components` with our `redux store`?
connect
