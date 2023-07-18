## Session 4
- React JSX needs to have one parent element inside the root, so we need to add a div inside our root.
- adding another div may look ugly, so we make use of React.fragment.
- React.fragment is a component provided/exported by react, it is like an empty tag.
- Config Driven UI: It's type of UI where the config is coming from a backend file or a DB, basically it means is that the data is driven using this config driven UI.

Props:
- Data inside components can be passed through props.
- Props can be passed as argument to our functional comps, and can be recieved as params because at the end of day, our functional comps are nothing but functions only.

Virtual DOM:
- Virtual DOM is representation of our actual DOM tree.
- We need Virtual DOM for reconciliation in react.
- React uses diff algorithm to find out the difference between old tree to new tree, it finds out what needs to be updated and it updates just that portion and don't re render whole DOM. -> this whole process is reconciliation
- NEVER USE INDEX AS THE KEY IN REACT.