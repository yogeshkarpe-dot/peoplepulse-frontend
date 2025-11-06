type HelloProps = {
  name: string;
};

// Props: Short for "properties", are inputs to a React component.
// They are passed to the component in a single object argument.
// Props are read-only, meaning a component cannot modify its own props.
// This immutability helps maintain predictable and consistent behavior in components.
// Think of them as function parameters for components.
// Here, we define a TypeScript type for the props that the Hello component will receive.
// The Hello component takes a single prop, 'name', and renders a greeting message.
// This is a functional component in React, defined using a function declaration.
// The component uses JSX syntax to describe the UI structure.
// When this component is used, it will display "Hello, [name]!" where [name] is the value passed to the component.
// Example usage: <Hello name="Yogesh" />
// This would render: Hello, Yogesh!
// The component is exported so it can be imported and used in other parts of the application.
// Here is the complete Hello component implementation:
export function Hello({ name } : HelloProps) {
  return <h1>Hello, {name}!</h1>;
}