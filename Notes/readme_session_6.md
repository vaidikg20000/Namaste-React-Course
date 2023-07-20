## Session 6
- UseEffect is a hook called when the components is everytime rendered.
- Our Components renders in two conditions, either our state changes or our props changes.
- UseEffect has one callback function and an array. In case if we don't want to call the useEffect after everynow and then we pass an array to prevent it.
- Inside that array we specify by providing states as to when the useEffect should be called.
- empty dependency array => once after render
- dep array [searchText] => once after initial render + everytime after my searchText changes it re renders.

-When I don't have any data I can use early return to prevent the component from loading, like-
```
if(!allRestaurants) return null;
```

### Inside {} we can write any JS, but there's a catch you can write any JS "Expression" inside it instead of "Statement".
- Like this is invalid:-
```
{
    //This is an expression
    let a=10;
    console.log(a);
}
```
- Instead {console.log()} is fine, we can also write it like this-
```
{(a=10), console.log(a)} //It's an statement
```
- Anything which returns a value (usually functions) are Expressions, and that is what react expects them inside { } instead statements which do not return anything.
