# Session 8

## Class Based Components-
- the most important part of class based component is render() method, without you cannot render class based components.
- render method return jsx.


## React lifecycle
- When react is rendering things up there is two phases- render and commit phase.
- render phase is first phase, it includes constructor and render methods.
- commit phase is the place where react is modifying the dom. and componentdidmount method is called.

- we can't make useeffect acync but we can make componentdidmount async.

## Useeffect()
- when a setInterval is called inside useEffect, it would be called again when redirected to another homepage, so a return statement is required, where we clear the interval and so that it can be unmounted from the component.
- React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.