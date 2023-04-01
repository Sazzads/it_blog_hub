import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="container mt-5 card">
                <h3 className='text-center text-danger p-3'>BLOG</h3>

                <div className="card m-2">
                    <h5>Difference between Props and state</h5>
                    <p><b>Ans: </b>State is used to handle data that might modify within a component, whereas props are used to transmit data from a parent component to a child component.While state may be updated using the setState() function, props are read-only and cannot be changed within a component.</p>
                </div>

                <div className="card m-2">
                    <h5>How Does useState() works ?</h5>
                    <p><b>Ans: </b>By returning a state value and a method to change that value, the useState() hook enables a functional component to have state. The component re-renders with the modified state values when the state values is modified using the update function.</p>
                </div>

                <div className="card m-2">
                    <h5>Purpose of useEffect other than fetching data.</h5>
                    <p><b>Ans: </b>In addition to data loading, useEffect() is a flexible hook that can be used for a number of other things. The title of a page can be updated, timers and intervals can be used, subscriptions and event listeners can be managed, animations and transitions can be utilized, and it can interface with outside libraries. we can also use dependency in [] bracket of useEffect.</p>
                </div>

                <div className="card m-2">
                    <h5>How Does React work?</h5>
                    <p><b>Ans: </b>A strong and adaptable library for creating user interfaces is React. It employs a declarative programming paradigm, uses a virtual DOM for quick updates, has modular and reusable components, and integrates with other frameworks and tools.</p>
                    When a component's state or properties change, React employs a virtual DOM to quickly refresh the user interface.The fundamental units of React applications are components, each of which is capable of holding state and props.React components are modular, reusable, and can be used to create intricate user interfaces.Developers specify how the UI should appear in React's declarative programming model, and React takes care of any modifications.Although Redux and React Router are frequently used together for state management and routing, React may be used with other libraries and frameworks as well.
                </div>

            </div>
        </div>
    );
};

export default Blog;