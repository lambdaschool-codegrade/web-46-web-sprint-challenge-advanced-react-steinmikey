# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

   Functional components (at least, strictly functional) don't manage state. They don't store values or data that change based on user input or user interaction. State components store values in state hooks, either built-in, like React's useState hook, or in a custom hook.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

   The componentWillMount function is called after a component is initiated, and after state is initialized. Typically used to make API calls.
   The componentWillUpdate function is called whenever state changes-- whenever setState is called to update any state values.

3. Define stateful logic.

   Stateful logic is any logic within a component. Functions that set, format or alter state are stateful logic.

4. What are the three step of creating a successful test? What is done in each phase?

   Arrange - setup, render component(s)
   Act - simulate user interaction (select, type, click, etc.)
   Assert - verifying results: make assumptions (i.e. expect(something).toBe()), if the assumption is correct, the test will pass
