# Session 7

- Never create component inside component, as it will slow down your rendering process. You can compose the componenets but not create or initialize a componenet inside a component. like-
```
const Home = () =>{
    const Food = () => {

    }
}
```

- Never put useState inside if else block, useState creates it's own global variables along the way, and react doesn't know if that useState variable would be there or not if it's placed inside if statement-
```
if(){
    const [x,setX] = useState('') //wrong way
}

for(){
    const [x,setX] = useState('') //wrong way
}
```

- React gives you useState to create local state variables for your functional component, so never create your useState outside your functional components-

```
const [x,setX] = useState('') //wrong way

const Home = () =>{
    //create useState here
}
```

## Routing

- When we use client side routing, we don't make any network request to server for routing, unlike in server side where we make request call and had to reload the page each time we redirect to new page.
- Using anchor tag instead of any router link, that unlike anchor tag it doesn't reload on every redirect.
- Since we want our header and footer to stay as it is, we fill our content inside <Outlet />.
- My router config will go inside <Outlet />, if my route is /about my about component will go inside my Outlet.

- object.values convert objects into array of values.