# LAB MANUAL  
## Unit–3: Implementing Routing in Single Page Applications (SPA)

This repository contains three experiments demonstrating routing concepts in React Single Page Applications using React Router.

---

## Experiment–1: Basic Client-Side Routing Using React Router

### Aim  
To implement basic client-side routing in a Single Page Application using React Router.

### Software Requirements  
- Node.js  
- React  
- React Router DOM  
- Web Browser  

### Theory  
Routing in a Single Page Application allows navigation between different views without reloading the entire web page. React Router is a widely used library that enables client-side routing in React applications. It uses components such as BrowserRouter, Routes, and Route to define navigation paths and map them to corresponding components. This improves user experience by providing faster transitions and dynamic content rendering.

### Procedure  
1. Create a React application.  
2. Install the react-router-dom package.  
3. Wrap the application with BrowserRouter.  
4. Define routes using Routes and Route components.  
5. Navigate between pages without page reload.  

---

## Experiment–2: Navigation Using Link Component

### Aim  
To implement navigation links in a Single Page Application using the React Router Link component.

### Theory  
The Link component in React Router enables navigation between different routes without refreshing the page. Unlike traditional anchor tags, the Link component prevents full page reloads and maintains SPA behavior. It updates the URL and renders the associated component dynamically. This ensures smooth and efficient navigation within the application.

### Procedure  
1. Import the Link component from react-router-dom.  
2. Create navigation links for different routes.  
3. Use the to attribute to define target paths.  
4. Verify smooth navigation without page reload.  

---

## Experiment–3: Multi-Page SPA Using Routing

### Aim  
To create a multi-page Single Page Application using client-side routing.

### Theory  
A multi-page SPA simulates multiple pages within a single application by dynamically rendering components based on the URL path. React Router enables this functionality through route mapping. Each component is associated with a specific path, and navigation between components occurs without reloading the browser. This approach enhances performance and provides a seamless user experience.

### Procedure  
1. Create multiple components representing different pages.  
2. Map each component to a specific route.  
3. Implement navigation using routing components.  
4. Test navigation between pages without refreshing the browser.  

---

## Conclusion  

The experiments successfully demonstrate the implementation of routing in a Single Page Application using React Router. Basic routing, navigation using the Link component, and multi-page SPA functionality were implemented and tested successfully.