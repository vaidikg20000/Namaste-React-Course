## session 10

## Ways to write css-
- basic css
- inline css
- SCSS or SASS
- frameworks like- MUI, Bootstrap
- Styled components
- tailwind css

### Why use css framework-
pros:
- to write optimize css.
- it saves time, faster development.
- consistent UI.
cons:
- it makes our bundle size heavy.
- we lose a control over our UI.


### Why to use scss or sass over basic css-
- Scss and sass makes css writing experience good, by using nesting, variables, mixins etc. It is a modern way of writing css.
- The scss is converted to the css just like jsx.

### Why inline css are not a good way of writing css-
- Repetition, difficut to maintain, not reusable.
- The job of processing inline css for browsers is heavy.

## Tailwind CSS
pros:
- Css on the go (in the same file)
- Reusability 
- less bundle size
- Flexible UI (Customizations)
cons:
- too much classes and code
- High learning curve.

## PostCSS-
- Postcss is a tool for transforming css to js, since browser doesn't understand the tailwind css classes, it is used for compilation of tailwindcss classes. 
- we use .postcssrc file to tell babel that we need will be using tailwind, so compile that.

-The best thing about tailwind css is that you willonly include the classes that you've used in the project would be moved to production, it makes the bundle size less.
-For dynamic classes like w-[200px] it creates a new class for that.
-Whenever writing code always stick to native tailwind classes, so it will be less code as tailwind since tailwind create snew classes for dynamic classes.

### Media queries tailwind-

- My threshold for small devices length crosses change bg to purple we write - sm:bg-purple