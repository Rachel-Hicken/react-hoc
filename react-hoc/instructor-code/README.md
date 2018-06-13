# Higher Order Component
- A function that takes a component as an arugment and returns a new component. The new component will add functionality, behavior, and/or code, etc... to the passed argument component rendering the argument component. 
- HOCs should be pure functions. 
  - pure function - will always return the same results if given the same input. It has 0 side-affects. 
- HOCs should never mutate the component it's given

```js
let HOC = (WrappedComponent) => {
  return class extends React.Component {
    // functionality/code/styling/behavior that we want to share

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

let newComponent = HOC(SomeComponent);
```

# Render Props
- Goal is to share functionality/behavior/etc... similar to HOCs.
- A function being passed to a component through props that affects what is rendered

```js
  <Component>
    {(data) => (
      // JSX utilizing the data being passed as an argument when props.children is invoked
    )}
  </Component>

  ======

  // the data being passed is the data you want shared. Other functionality and stuff can be shared as well
  return (
    <div>
      { this.props.children(data) }
    </div>
  )
```