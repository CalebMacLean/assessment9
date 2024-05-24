### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    React Router enables client side routing by using tools that can modify the History API and URL.

- What is a single page application?
    A single page application is one that does not need to reload a page and instead dynamically renders elements as users interact with the site.

- What are some differences between client side and server side routing?
    Server side routing is more secure since its routing logic is connected to the back end infrastructure. Client side is faster processing usually.

- What are two ways of handling redirects with React Router? When would you use each?
    The two ways of handling redirects are with the useNavigate hook or the Navigate component. The difference between the two is one will push the URL to the browser's History API and the other won't.

- What are two different ways to handle page-not-found user experiences using React Router? 
    You can create a catch all route that either redirects to a different page on the site or to a 404 page.

- How do you grab URL parameters from within a component using React Router?
    Using the useParams hook and adding a route variable to a route declaration.

- What is context in React? When would you use it?
    Context is a way to store functionality or values more permanently and allows for different components to have access to it.

- Describe some differences between class-based components and function
  components in React.
    Outside of the syntax differences, class-based components due not have access to hooks and require additional libraries to manage effectively.

- What are some of the problems that hooks were designed to solve?
    Hooks were designed to simplify the ways of passing properties and affecting state and to do away with wrapper hell.