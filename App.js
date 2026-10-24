/**
 * <div id="parent">
*    <div id="child">
*     <h1>I'm h1 tag</h1>
*     <h2>I'm h2 tag</h2>
*    </div>
*       <div id="child2">
    *     <h1>I'm h1 tag</h1>
    *     <h2>I'm h2 tag</h2>   
*       </div>
 * </div>
 */

const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {id: "child"}, 
            [
                React.createElement("h1", {},"I'm a h1 tag"),
                React.createElement("h2", {}, "I'm a h2 tag"),
            ]
        ),
        React.createElement("div", {id: "child2"}, 
            [
                React.createElement("h1", {}, "I'm a h1 tag"),
                React.createElement("h2", {}, "I'm a h2 tag"),
            ]
        )
    ]
);
// const heading = React.createElement(
//             'h1', 
//             {
//                 id: 'heading',
//                 xyz: 'abcd'
//             }, 
//             'Hello world from React!'
//         );
console.log(parent);// React.Element return an object
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)// when we render the object is converted into HTML