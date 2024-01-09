# Session 11

## State vs prop
- state is local variable, prop is the value passed from component to another component.
- props are kind of like local state for our parent.

## Props Drilling-
- Passing of data from nested components like- Parent -> child -> child -> target component.
- Basically Props drilling is passing props from parent component to child component to another child component and so on until it reaches target component that actually needs data.
- Props drilling makes our code cluttered, as middle components (from parent to target component) sometimes have no use of those props.
- If the hierarchy is two or three levels it is fine, but not more than that.
- To solve and optimize the issue happened due to props drilling is use context api.

data management decides if your app is scalable or not.

- we cannot modify state of another sibling from one component. Instead of the section maintaining it's own state , we will maintain state in it's parent.
- We will take the control from show and hide from children to Parent, this concept is known as- lifting the state up.

## Profiler in React Dev tools
- Profiler records the whole user journey, it shows how the page was rendered. 
- It makes the debugging easier for large scale application.
- It shows which component/process taking how much time.

- where we have use case like where we want that data everywhere, we use centralised space, for react it is context.
- It is like a shared state for the whole app and any component can use that data.

- We can create global variables, it is not optimized as react is not tracking it, react will not trigger it's reconciliation process as compared to state variables.
- We Create a context in new file like - userContext.js
- I can have multiple contexts for different things in my app.

- First we'll create a user context using the create context method
- Then we'll use that context in our component like- 
```
const user = userContext(<Context_Name>); 
```
- we don't use context for everything, we use context for the data that is required for different different places.
- Context is like useState for the whole application.
- It is like a data store, we can use context whenever and wherever we wish to.

- we will use userContext.Provider to bind all the components and pass on the state across all those binded components using value attribute, this state can be dynamically updated using useState like-
```
const [user, setUser] = useState({
    name: "vaidik",
    email: "v@gmail.com"
})


<UseContext.Provider value={{user:user}}>
<Header />
<Footer />
</UseContext.Provider>
```

- Similarly we can pass our setUser like this - 

```
const {user, setUser} = useContext(UserContext)
```

- when you're creating a context, you can name your context in userContext.js-

```
UserContext.displayName = "UserContext"
```

- even if we are using dynamic import, react will make the context for it. As UI layer is different than the data layer, since UI layer does all the work like reconciliation and making and rendering the components, while data layer will keep our data intact.