# Lesson 01: What is React?

## What is React?
React is a JavaScript library for building **user interfaces**. It is the **view layer** for web applications.

## Components
* At the heart of all React applications are components. A component is a self-contained module that renders some output.
* Components are composable. A component might include one or more other components in its output.

## How does it work?
* Unlike many of its predecessors, React operates not directly on the browser's Document Object Model(DOM) immediately, but on a **virtual DOM**.
* That is, rather than manipulating the `document` in a browser after changes to our data (which can be quite slow), it resolves changes on a DOM built and run entirely in memory. After the virtual DOM has been updated, React intelligently determines what changes to make to the actual browser's DOM.



