
# Name

> Backdrop expansion with an modal

## This project
This project builds on the basic Backdrop project. Now instead of only showing the backdrop it also shows an modal in front of the backdrop. Modal and Backdrop both dissapears when the user taps on the backdrop. (Or something else, you may add that by yourself)
## Folder structure
-   📁 Backdrop
    -   📄 Backdrop.js
    -   📄 Backdrop.module.css
-   📁 Modal
    -   📄 Modal.js
    -   📄 Modal.module.css
-   📄 index.js
-   📄 App.js

## Code explaination
Lets start with the modal itself. In the modal I hold 2 items the `Backdrop` and `Modal` itself. Both of these components are wrapped around a `React.Fragment` which is actually nothing (just a wrapper without so that we at least return one thing, its basically a wrapper without using an html element). 

As you can see below the Modal is always visible, but it toggles a `transform` style to hide or show it via the `prop.show`. The backdrop accepts also 2 props like the `modalClose` and the `show` prop. How the Backdrop works innerly you [click here](http://localhost:3000/detail/Backdrop) for more info.

```jsx
export default (props)=>{
    return(
        <React.Fragment>
            <Backdrop clicked={props.modalClose} show={props.show}/>
            <div 
                className={styles['Modal']}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-500%)',
                    opacity: props.show ? '1' : '0'
                }} 
            >
                {props.children}
            </div>
        </React.Fragment>
)}
```

In the App (or any other component where you hold your `Modal`) you define the state and the open and close modal function. I have done this inline but ofcourse you can make an stand alone function for this. The modalClose just swithes the `modalShow` to false and this handles the show and hiding of the modal and the backdrop, because the `modalShow` is passes as a prop.
```jsx
render(){
        return(
            <div className={classes.App}>
                <Modal
                    show={this.state.showModal}
                    modalClose={()=>this.setState({showModal:false})}
                >
                    {this.state.showModal ? 'A MODAL' : ''}
                </Modal>
                <button onClick={()=>this.setState({showModal:true})}>Show Modal</button>
            </div>
        )
}
```