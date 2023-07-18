## Session 6
- UseEffect is a hook called when the components is everytime rendered.
- Our Components renders in two conditions, either our state changes or our props changes.
- UseEffect has one callback function and an array. In case if we don't want to call the useEffect after everynow and then we pass an array to prevent it.
- Inside that array we specify by providing states as to when the useEffect should be called.
- empty dependency array => once after render
- dep array [searchText] => once after initial render + everytime after my searchText changes it re renders.