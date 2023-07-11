# Session 2-
- In React.createElement props can be anything other than attributes like-id 
- For our app (this first ver) to be prod ready we need to optimize our code like-
    -minify our files
    -We need to run a server
    -We need to remove console logs
    -We need to bundle it up 

- A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. like- webpack, vite, parcel, here we are using Parcel
- create-react-app uses webpack as a bundler.
-package lock tells you which exact version we need to use for the package on prod. it locks the version for you. we never have to keep it into gitignore
- to start parcel - npx parcel index.html
- we need to add type="module" inside our script tag because it can't read what is 'import' keyword and hence it throws the error in app.js.

- HMR: Hot Module Replacement, Parcel will keep track of all the files which you're updating and it automatically update it that.
- Parcel uses File Watcher Algorithm to perform the HMR
- Parcel: 
    Created a Server for you
    BUNDLING, 
    MINIFYING, 
    Image Optimization
    Caching while Development
    Compression
    Compatibility with older version of Browsers (It add Pollyfills)
    Https on dev environment
    Manages PORT numbers
    Consistent Hashing Algorithm
    Tree shaking- removing unwanted code
- React is Modi and parcel (Bundler) is Amit Shah
- Dependnecies have their own dependencies, these dependies are known as Transitive Dependencies  

