## Custom Hooks
We created our own hooks to make our code more modular and reusable.
Create a hook always with use name in front of it, it is a react way of knowing it is a hook.
Since we can't we create a state variable in normal helper function, we create a custom hook.

Note- we used all the helper methods with named export because we have multiple functions there.

We don't clean up our event listners when it's job is done, even when navigating to other pages, the event listner is still there.
Our browser will keep holding our event lsitners and it will get blowed up.

can be used like-
```
return () =>{
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)

}
```

your hook will be removed in unmounting phase.

Basic job of bundler is bundle your code.
Parcel bundles our whole code into one js file. Our al the code is bundled, minified together in one file.(for our small application).

but for large scale application they cannot work if you just create one bundle. Instead we should do chunking/code splitting/dynamic bundling/lazy loading/On Demand Loading/Dynamic Import.

you have to make logical bundles in your app. 

In large scale apps we build different chunks/bundles based on the use cases like for flights secton different bundle is created and busses section different bundle is created etc.

system design-So when I am making makemytrip I will be using code splitting for all of them, when I will be using webpack or parcel for bundling I will ensure that my bundle doesn't include random code.

When you are loading yourcomponent in dynamic import/on demand loading, react tries to  suspends.
upon on demand loading -> upon render -> suspend loading.

React tries to render even if code is coming after a delay, to handle this we use suspense.

suspense take a prop- fallback, in this allback you can pass in to show in the meantime our page loads like loading/shimmer component.