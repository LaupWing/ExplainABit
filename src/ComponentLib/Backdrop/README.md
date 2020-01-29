
# Backdrop

> **Just** a black Backdrop in React

## This project
Just a simple transparent black backdrop showed when you click on the button the center.

## Folder structure
-   📄 Backdrop.js
-   📄 App.js
-   📄 index.js

## Code explaination
This project exists mainly of two components; The `App.js` and the backdrop `Backdrop.js`.

In the `Backdrop.js` file you can find the Backdrop which is a black transparent box that extends to the full width and height of the container. This backdrop needs a `show` prop and a `clicked` function prop.

Depending on the state of the show it will either show or hide the backdrop.
```jsx
props.show 
? <div className={classes.Backdrop} onClick={props.clicked}></div> 
: null
```

In the App (or another parent component where you imported the backdrop from) you hold the show state for the Backdrop and the function to toggle this show state. This toggle function needs to be passed on to the backdrop as a prop.

```jsx
<div className={classes.App}>
    <Backdrop 
        show={this.state.show} 
        clicked={()=>this.setState({show:false})
    }/>
    <button onClick={()=>this.setState({show:true})}>Show Backdrop</button>
</div>
```