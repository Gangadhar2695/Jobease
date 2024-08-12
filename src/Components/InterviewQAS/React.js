
import "../Java/Java.css";


const React = () => {
  return (
    <>
      <div className="java d-flex flex-row  gap-2">

        <div className="one-div p-4 text-start">
          <h6 className="text-center fw-bold text-primary">Table of content</h6>
          <p><a href="#">introduction to React</a></p>
          <p><a href="#">React interview questions for freshers</a></p>
          <p><a href="#">React interview questions for experienced</a></p>
          <p><a href="#">React domains</a></p>
          <p><a href="#"></a>React importance</p>
          <p><a href="#">introduction to React</a></p>
          <p><a href="#">React interview questions for freshers</a></p>
          <p><a href="#">React interview questions for experienced</a></p>
          <p><a href="#">React domains</a></p>
          <p><a href="#"></a>React importance</p>
          <p><a href="#">conclusion</a></p>


        </div>

        <div className="two-div d-flex flex-column justify-content-start">

          <h3 className="text-dark ">Top 50 React js sample Interview Questions and Answers</h3>
          <div className="d-flex flex-row justify-content-between">
            <p className="fw-bold text-secondary"><span className="text-dark">By</span> Gangadhar</p>
            <p className="text-secondary fw-bold"><i class="fa-duotone fa-calendar-days"></i>20 june 2024</p>
          </div>

          <img className="react-img" src="https://primathon.in/blog/wp-content/uploads/2024/04/image-1-7-2.jpg" />

          <p>React is a JavaScript library for building user interfaces.React is a JavaScript library created by Facebook.
            It is a tool for building UI components.React is the most popular front-end technology that more and more companies are using right now.
            React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions.
          </p>


          <p>When compared to other technologies on the market, React is a new technology. Jordan Walke, a software engineer at Facebook, founded the library in 2011, giving it life.
            React makes it easier to create dynamic web applications because it requires less coding and offers more functionality.

          </p>

          <p>Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application.


          </p>



          <div>
            <h5 className="text-dark fw-bold fs-small">1.What is React?</h5>
            <p>React is a JavaScript library for building user interfaces.React is a JavaScript library created by Facebook. It is a tool for building UI components.React is the most popular front-end technology that more and more companies are using right now. React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions.
              Jordan Walke, a software engineer at Facebook, founded the library in 2011, giving it life.
            </p>
            <h7 className="fw-bold">React Example:</h7>
            <div className="bg-light">
              <p className="text-success">npx create-react-app my-app<br />
                cd current folder<br />
                npm start<br />
                <br />

              </p>
            </div>


            <h5 className="text-dark fw-bold fs-small">2.What are the top 5 features of React js?</h5>
            <p>React js is one the most famous and most used language frontend library in the present market.There are many feautures
              that easiers development:They are

              <ul>
                <li><span className="text-dark">JSX:</span>JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</li>
                <li><span className="text-dark">Components:</span> Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts .</li>
                <li><span className="text-dark">Virtual DOM: </span>React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.</li>
                <li><span className="text-dark">One-way Binding: </span>React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components.</li>
                <li><span className="text-dark">High Performance: </span>React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.</li>
              </ul>
            </p>

            <h5 className="text-dark fw-bold fs-small">3.What is JSX(Javascript Syntax Extension)?</h5>
            <p>JSX stands for javascript syntax extension.It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
              Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object.
              The file needs to be transformed into a regular JavaScript object. For this, we use Babel.
            </p>

            <h5 className="text-dark fw-bold fs-small">4.What is virtual DOM?</h5>
            <p>React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.
              DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure.
            </p>
            <img src="https://media.licdn.com/dms/image/D5612AQHrTcE_Vu_qjQ/article-cover_image-shrink_600_2000/0/1694674429966?e=2147483647&v=beta&t=veXPTTqusbyai02Fix6ZscKdywGztVxSlShgv9Uab1U" className="w-75 ms-5 p-2" />


            <h5 className="text-dark fw-bold fs-small">5.How do you create React App?</h5>
            <p>There are few steps to follow to create your first React App:</p>
            <p><span className="text-dark">step1:</span>Install NodeJS on the computer because we need npm to install the React library. Npm is the node package manager that contains many JavaScript libraries, including React.</p>
            <p><span className="text-dark">step2:</span>Install the create-react-app package using the command prompt or terminal.</p>
            <p><span className="text-dark">step3:</span>Install a text editor of your choice, like VS Code or Sublime Text.</p>
            <p><span className="text-dark">step4:</span>Install npm and run command npx create-react-app my-app.<br />change directory to current file<br />Finally to start app in chrome Hit npm Start</p>

            <h5 className="text-dark fw-bold fs-small">6.Why there is a need for keys in React?</h5>
            <p>Keys are very important in lists for the following reasons:</p>
            <p><ul className="">
              <li>A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists</li>
              <li>It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered</li>
              <li>These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. </li>
              <li>This leads to increase in application’s performance.</li>
            </ul></p>

            <h5 className="text-dark fw-bold fs-small">7. What are the components in React?</h5>
            <p>Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.
              There are two types of components in React:<br />
              <span className="text-dark">1.Functional Component:</span>Functional Component is one way to create components in a React Application. React.js Functional Components helps to create UI components in a Functional and more concise way.
              These are simply JavaScript functions. We can create a functional component in React by writing a JavaScript function. These functions may or may not receive data as parameters.
              <br />
              <p>Exapmle:</p>
              <p className="text-success bg-light">function Greeting()<br />  return Welcome to JOBSNOW</p>
              <span className="text-dark">2.Class Component:</span>These types of components can hold and manage their own state and have a separate render method to return JSX on the screen. They are also called Stateful components as they can have a state.
              <br />
              <p>Exapmle:</p>
              <p className="text-success bg-light">class Greeting extends React.Component <br />  render() <br />return Welcome to JOBSNOW</p>
            </p>

            <h5 className="text-dark fw-bold fs-small">8.What are Props in ReactJS?</h5>
            <p>ReactJS being a component-based library, the user interface (UI) is divided into small, reusable pieces. These components might need to send data to each other in some scenarios, and passing data between the components is done by way of props. The term "props" stands for "properties" and is used for passing data from one component to another. As opposed to state in React, props are read-only. So, the data coming from a parent component can't be changed by the child component.</p>

            <h5 className="text-dark fw-bold fs-small">9.What is an event in React??</h5>
            <p>In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like:
              Events are named using camel case instead of just using the lowercase.
              Events are passed as functions instead of strings.</p>

            <h5 className="text-dark fw-bold fs-small">10.What are Higher Order Components(HOC)?</h5>
            <p>Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.</p>
            <p>1.Code reuse, logic and bootstrap abstraction<br />2.Props manipulation.</p>

            <h5 className="text-dark fw-bold fs-small">11.What is destructuring?</h5>
            <p>Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment).
              We may have an array or object that we are working with, but we only need some of the items contained in these.Destructuring makes it easy to extract only what is needed.</p>
            <p className="text-dark">Array Destructuring Example:</p>
            <p className="bg-light text-success">const iterable = ['a', 'b'];<br />const [x, y] = iterable;<br /> // x = 'a'; y = 'b'</p>
            <p className="text-dark">Object Destructuring Example:</p>
            <p className="bg-light text-success">const obj = first:Jane, last: Doe <br />const first, last = obj;</p>

            <h5 className="text-dark fw-bold fs-small">12.Explain Spread operator in React?</h5>
            <p>The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
              The spread operator is a powerful tool in JavaScript and React that can simplify your code, make it more readable, and improve performance in some cases. It's a versatile feature that can be used in various scenarios, such as passing props, copying objects, and managing state.
            </p>
            <p>Example:</p>
            <p className="bg-light text-success">const numbersOne = [1, 2, 3];<br />const numbersTwo = [4, 5, 6];<br />const numbersCombined = [...numbersOne, ...numbersTwo];</p>
            <img src="https://strapi.dhiwise.com/uploads/how_to_simplify_your_react_code_with_the_spread_operator_1_1dc7ef0e7d.jpg" className="py-3 w-75" />


            <h5 className="text-dark fw-bold fs-small">13.Explain map(),filter(),reduce() functions in js?</h5>
            <p><span className="text-dark">1.map():</span>The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.</p>
            <p>Exapmle:</p>
            <p className="text-success bg-light">const numbers = [1, 2, 3, 4];<br />const doubled = numbers.map(item = item * 2);<br />console.log(doubled); // [2, 4, 6, 8]</p>

            <p><span className="text-dark">2.filter():</span>The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array..</p>
            <p>Exapmle:</p>
            <p className="text-success bg-light">const numbers = [1, 2, 3, 4];<br />const evens = numbers.filter(item = item % 2 === 0);<br />console.log(evens); // [2, 4]</p>

            <p><span className="text-dark">3.reduce():</span>The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.</p>
            <p>Exapmle:</p>
            <p className="text-success bg-light">const numbers = [1, 2, 3, 4];<br />const sum = numbers.reducefunction (result, item) <br />  return result + item;<br />console.log(sum); // 10</p>

            <h5 className="text-dark fw-bold fs-small">14.Difference between Controlled and Uncontrolled components?</h5>
            <p><span className="text-dark">1.controlled components:</span>1.Data is controlled by the parent component<br />2.They take in the current values through props and then notify the changes via callbacks<br />
              3.It does not maintain its internal state.<br />4.It allows validation control.	</p>
            <p><span className="text-dark">2.uncontrolled components:</span>1.It stores the current value using react ref.<br />2.The DOM itself holds control over the data.<br />
              3.It maintains its internal state.<br />4.It does not allow validation control.</p>

            <h5 className="text-dark fw-bold fs-small">15.What are hooks in React js?</h5>
            <p>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
              Hooks allow us to "hook" into React features such as state and lifecycle methods.Although Hooks generally replace class components, there are no plans to remove classes from React.Some hooks are 1.useState 2.useRef 3.useEffect 4.useMemo 5.useCallback
              <p className="text-dark">Examples:</p>
              <p className="text-success bg-light">1.const [color, setColor] = useState("red");</p>
              <p className="text-success bg-light">2.const ref=useRef();</p>  </p>

            <h5 className="text-dark fw-bold fs-small">16.Explain useState?</h5>
            <p>The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.To use the useState Hook, we first need to import it into our component.
            We initialize our state by calling useState in our function component.useState accepts an initial state and returns two values:The current state.A function that updates the state.</p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">import useState  from "react";<br/>const [color, setColor] = useState("");</p>

            <h5 className="text-dark fw-bold fs-small">17.What is useEffect?</h5>
            <p>The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.useEffect(function, dependency)</p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">import useEffect  from "react";<br/>useEffect(() = setTimeout(() = setCount((count) = count + 1),1000))</p>

            <h5 className="text-dark fw-bold fs-small">18.What is useRef?</h5>
            <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
            useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).</p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">import useRef  from "react";<br/>const inputElement = useRef();<br/>input type="text" </p>


            <h5 className="text-dark fw-bold fs-small">19.What is useContext?</h5>
            <p>React Context is a way to manage state globally.It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
            To create context, you must Import createContext and initialize it.Wrap child components in the Context Provider and supply the state value.
            In order to use the Context in a child component, we need to access it using the useContext Hook.import it and then Store the passed data ina variable and use it in your child components. </p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">import useContext,createContext  from "react";<br/>const UserContext = createContext()<br/>UserContext.Provider value="user"<br/>  const user = useContext(UserContext);<br/>"Hello //user// again"</p>

            <h5 className="text-dark fw-bold fs-small">20.What is useReducer?</h5>
            <p>The useReducer Hook is similar to the useState Hook.It allows for custom state logic.If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>
            The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.The useReducer Hook returns the current stateand a dispatchmethod.The useReducer Hook accepts two arguments.
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">import useReducer  from "react";<br/>  const [todos, dispatch] = useReducer(reducer, initialTodos);<br/>const handleComplete = (todo) = dispatch(type: "COMPLETE", id: todo.id)<br/>onChange = () => handleComplete(todo)</p>


            <h5 className="text-dark fw-bold fs-small">21.What is useMemo?</h5>
            <p>The React useMemo Hook returns a memoized value.The useMemo Hook only runs when one of its dependencies update.This can improve performance.The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.</p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">import useMemo  from "react";<br/>  const calculation = useMemo(() = expensiveCalculationcount,count);</p>


            <h5 className="text-dark fw-bold fs-small">22.What are Lifecycle methods in React?</h5>
            <p>Lifecycle Methods of React Components are defined as a series of methods that are invoked in different stages of the component’s existence. React web apps are actually a collection of independent components which run according to the interactions made with them. Every React Component has a lifecycle of its own.
               There are four stages in life cylcle of every component.They are: </p>
               <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230804133715/gfg.png" className="py-2 w-75 ms-5"/>
              <p><span className="text-dark">1.Initialization:</span> This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class. 
              <br/><span className="text-dark">2.Mounting:</span>Mounting is the stage of rendering the JSX returned by the render method itself.
              <br/><span className="text-dark">3.updating:</span>Updating is the stage when the state of a component is updated and the application is repainted.
              <br/><span className="text-dark">4.Unmounting:</span>As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</p>


            <h5 className="text-dark fw-bold fs-small">23.Explain mounting phase in detail ?</h5>
            <p>Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. The mounting phase consists of two predefined functions as described below.</p>
            <p ><span className="text-dark">1.Componentwillmount:</span>As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time. </p>
            <p ><span className="text-dark">2.ComponentDidmount:</span>Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time.</p>

            <h5 className="text-dark fw-bold fs-small">24.Explain Updating phase in detail ?</h5>
            <p>Updation is the phase where the states and props of a component are updated followed by some user events such as clicking, pressing a key on the keyboard, etc. The following functions are invoked at different points of the Updation phase.</p>
            <p ><span className="text-dark">1.setState():</span>This is not particularly a Lifecycle function and can be invoked explicitly at any instant. This function is used to update the State of a component.</p>
            <p ><span className="text-dark">2.shouldComponentUpdate():</span>This method makes the component re-render only when there is a change in the state or props of a component and that change will affect the output. </p>
            <p ><span className="text-dark">3.componentWillUpdate():</span>This function is invoked before the component is re-rendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.</p>
            <p ><span className="text-dark">4.componentDidUpdate():</span>Similarly this function is invoked after the component is re-rendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.</p>

            <h5 className="text-dark fw-bold fs-small">25.Explain Unmounting phase in detail?</h5>
            <p>This is the final phase of the lifecycle of the component which is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.</p>
            <p ><span className="text-dark">1.componentWillUnmount():</span>This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.</p>

            <h5 className="text-dark fw-bold fs-small">26.What are limitations of Class Components in React?</h5>
            <p>Limitations of class components in React js:<br/>
            <ul>
              <li><span className="text-dark">THIS keyword: </span>Using 'this' in class components might be confusing and cause unexpected issues, especially when working with code that happens at different times or passing functions around.</li>
            <li><span className="text-dark">Inheritance Usage: </span>Class components use the concept of inheritance, which would possibly lead to issues with deep aspect hierarchies and make it hard to manage state and behavior</li>
            <li><span className="text-dark">Performance Issues: </span>Class components might work a bit slower than functional components with hooks because they create new instances of classes and connect methods, which can add some extra work and slow things down a little.</li>
            <li><span className="text-dark">Reusability: </span>Class components can be a bit harder to reuse because they follow a specific structure and rely on a method called inheritance to share behaviors.</li>
            </ul>
            </p>





              
            <h5 className="text-dark fw-bold fs-small">27.Difference between Call by Value and Call by reference?</h5>
            <p><span className="text-dark">1.Call By Value:</span>In Java, call by value refers to calling a method by
              passing the value in the parameter. In Java, call by value passes a copy of the variable to the method,
              so all changes are reflected only in that method; thus, no changes are reflected in the main method.
              This is the main difference between call by value in java and call by reference in java. </p>

            <p className="text-dark">Exapmle:</p>
            <p className="text-success bg-light">class job<br />public static void add(int number)<br />number = number+1; <br /> System.out.println("value in method: "+number);
              <br />public static void main(String[] args)<br />int number=10;<br /> System.out.println("value before method call : "+number);<br />
              add(number);<br />System.out.println("value after method call: "+number);</p>

            <p><span className="text-dark">2.Call By Reference:</span>Though Java is strictly call by value when we pass
              the reference of the object it creates a copy of the reference and then passes it as value to the method.
              The copy reference also points to the same address so all the changes also reflect in the
              main method this is the main difference between call by value in java and call by reference in java. </p>

            <p className="text-dark">Exapmle:</p>
            <p className="text-success bg-light">class job<br />int number=10<br />public static void add(int obj)<br />obj.number = obj.number+1; <br /> System.out.println("value in method: "+obj.number);
              <br />public static void main(String[] args)<br />job obj=new job();<br /> System.out.println("value before method call : "+obj.number);<br />
              add(obj);<br />System.out.println("value after method call: "+obj.number);</p>



            <h5 className="text-dark fw-bold fs-small">26.What is Object Class in Java?</h5>
            <p>The Object class is the parent class of all the classes in java by default.
              In other words, it is the topmost class of java.The Object class is beneficial
              if you want to refer any object whose type you don't know.Notice that parent class
              reference variable can refer the child class object.<br />
              Some methods we have access with this class are <span className="text-dark"> 1.Hashcode() 2.getClass() 3.equals()
                4.toString() 5.finallize()</span>
            </p>
            <p>Exapmle:</p>
            <p className="text-success bg-light">Object obj1= getObject();</p>



            <h5 className="text-dark fw-bold fs-small">27.What is an array in Java?</h5>
            <p>An Array in Java is a data structure that is used to store a fixed-size
              sequence of elements of the same type. Elements of an array can be accessed by their index,
              which starts from 0 and goes up to a length of minus 1. Array declaration in Java is done with the help of square brackets
              and size is also specified during the declaration. </p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">int[] Arr = new int[5];
            </p>


            <h5 className="text-dark fw-bold fs-small">28.Differences between String,StringBuffer and StringBuilder in Java?</h5>
            <p><span className="text-dark">1.String: </span>In Java, string is basically an object that represents sequence of char values. An array of characters works same as Java string.
              Java String class provides a lot of methods to perform operations on strings such as compare(), concat(), equals(), split(), length(), replace(), compareTo(), intern(), substring().
              It is immutable.No thread operations in a string.

            </p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">1.String s="welcome"; //only one object for two references  <br />
              2.String s=new String("Welcome"); //creates new objects
            </p>

            <p><span className="text-dark">2.StringBuffer: </span>StringBuffer class in Java is used to represent a changeable string of characters. It offers an alternative to the immutable String class by enabling you to change a string’s contents without constantly creating new objects. Mutable (modifiable) strings are created with the help of the StringBuffer class.
              The StringBuffer class in Java is identical to the String class except that it is changeable.It is mutable (can be modified and other string operations could be performed on them.)
              It is thread-safe (two threads can’t call the methods of StringBuffer simultaneously)

            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">class StringBuffer<br />psvm(string args[])<br />StringBuffer s=new StringBuffer()<br />
              s.append("jobnow")<br />s.append("jobnow")<br />String message = s.toString();<br />system.out.println(message);
            </p>


            <p><span className="text-dark">3.StringBuilder: </span>
              StringBuilder is a class used to build a mutable string.It is not thread-safe (two threads can call the methods concurrently)
              Being non-synchronized, implementation is faster.
            </p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">1.StringBuilder s=new StringBuilder();</p>



            <h5 className="text-dark fw-bold fs-small">29.What is toString() method in Java?</h5>
            <p>If you want to represent any object as a string, toString() method comes into existence.
              The toString() method returns the String representation of the object.
              If you print any object, Java compiler internally invokes the toString() method on the object.
              So overriding the toString() method, returns the desired output</p>
            <p className="text-dark">Syntax:</p>
            <p className="text-success bg-light">public String toString()//overriding the toString() method  <br />
              return rollno+" "+name+" "+city;
            </p>


            <h5 className="text-dark fw-bold fs-small">30.Difference between Constructor and method  in Java?</h5>
            <p>Java constructors are used for initializing objects. During creation, constructors are called to set attributes for objects <br />
              1.Constructors are only called when the object is created but other methods can be called multiple times during the life of an object. <br />
              2.Constructors do not return anything, whereas other methods can return anything. <br />
              3.Constructors are used to setting up the initial state but methods are used to perform specific actions.
            </p>

            <h5 className="text-dark fw-bold fs-small">30.Difference between Abstract Class and Interface in Java?</h5>
            <p><span className="text-dark fw-bold">1.Abstract Class:</span>1.Both abstract and non-abstract methods may be found in an abstract class.<br />
              2. Abstract Class supports Final methods. <br />3.Multiple inheritance is not supported by the Abstract class.<br />4.Abstract Keyword is used to declare Abstract class.<br />
              5.extend keyword is used to extend an Abstract Class.	</p>
            <p><span className="text-dark fw-bold">2.Interface :</span>1.The interface contains only abstract methods.
              <br />2.The interface class does not support Final methods.<br />3.Multiple inheritances is supported by Interface Class.
              <br />4.Interface Keyword is used to declare the interface class.<br />5.implements Keyword is used to implement the interface.
            </p>


            <h5 className="text-dark fw-bold fs-small">31.Explain different types of inheritance in Java?</h5>
            <p>Inheritance is the method by which the Child class can inherit the features of the Super or Parent class. In Java, Inheritance is of four types:<br />
              <span className="text-dark fw-bold">1.Single Inheritance: </span>   When a child or subclass extends only one superclass, it is known to be single inheritance. Single-parent class properties are passed down to the child class.<br />
              <span className="text-dark fw-bold">2.Multi-level Inheritance: </span>   When a child or subclass extends any other subclass a hierarchy of inheritance is created which is known as multilevel inheritance. In other words, one subclass becomes the parent class of another.<br />
              <span className="text-dark fw-bold">3.Hierarchial Inheritance: </span> When multiple subclasses derive from the same parent class is known as Hierarchical Inheritance. In other words, a class that has a single parent has many subclasses.  .<br />
              <span className="text-dark fw-bold">4.Multiple Inheritance: </span>When a child class inherits from multiple parent classes is known as Multiple Inheritance. In Java, it only supports multiple inheritance of interfaces, not classes.
              <br /></p>


            <h5 className="text-dark fw-bold fs-small">32.What are some OOPS oriented programming languages?</h5>
            <p>
              <ul>
                <li>Java</li> <li>JavaScript</li>  <li>Python</li>  <li>C#</li>  <li>Ruby</li>
              </ul>
            </p>

            <h5 className="text-dark fw-bold fs-small">33.What is Constructor?</h5>
            <p>A constructor is a block of code that initializes the newly created object. A constructor resembles an instance method but it’s not a method as it doesn’t have a return type. It generally is the method having the same name as the class.
              The most common classification of constructors includes:<ol>
                <li>Default Constructor</li>
                <li>Parameterized Constructor</li>
                <li>Non-Parameterized Constructor</li>
              </ol>
            </p>

            <h5 className="text-dark fw-bold fs-small">34.What are some java platforms?</h5>
            <p>1.Java SE (Java Standard Edition): It includes core topics like OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream.
              It includes Java programming APIs such as java.lang, java.io, java.net, java.util, java.sql, java.math.<br />
              2. Java EE (Java Enterprise Edition):It is an enterprise platform that is mainly used to develop web and enterprise applications. It is built on top of the Java SE platform.<br />
              3.Java ME (Java Micro Edition):It is dedicated to mobile applications.<br />
            </p>


            <h5 className="text-dark fw-bold fs-small">35.Explain String methods in Java?</h5>
            <p>
              <span className="text-dark">1.Char at():</span>The Java String class charAt() method returns a char value at the given index number.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public char charAt(int index)</p>
              <span className="text-dark">2.concat():</span>The Java String class concat() method combines specified string at the end of this string. It returns a combined string. It is like appending another string..<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String concat(String anotherString)    </p>
              <span className="text-dark">3.contains():</span>The Java String class contains() method searches the sequence of characters in this string. It returns true if the sequence of char values is found in this string otherwise returns false.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public boolean contains(CharSequence sequence)    </p>
              <span className="text-dark">4.equals():</span>The Java String class equals() method compares the two given strings based on the content of the string. If any character is not matched, it returns false. If all characters are matched, it returns true.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>publicboolean equals(Object anotherObject)  </p>
              <span className="text-dark">5.endsWith():</span>The Java String class endsWith() method checks if this string ends with a given suffix. It returns true if this string ends with the given suffix; else returns false.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public boolean endsWith(String suffix)</p>
              <span className="text-dark">6.join():</span>The Java String class join() method returns a string joined with a given delimiter. <br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>String joinString1=String.join("-","Hello","World!"); </p>
              <span className="text-dark">7.length():</span>The Java String class length() method finds the length of a string. <br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public int length() </p>
              <span className="text-dark">8.replace():</span>The Java String class replace() method returns a string replacing all the old char or CharSequence to new char or CharSequence.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>String replaceString=s1.replace('a','e');</p>
              <span className="text-dark">9.replaceAll():</span>The Java String class replaceAll() method returns a string replacing all the sequence of characters matching regex and replacement string.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String replaceAll(String regex, String replacement)  </p>
              <span className="text-dark">10.split():</span>The java string split() method splits this string against given regular expression and returns a char array.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>String[] words=s1.split("\\s");</p>
              <span className="text-dark">11.substring():</span>The Java String class substring() method returns a part of the string.We pass beginIndex and endIndex number position in the Java substring method.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>System.out.println(s1.substring(2,4));</p>
              <span className="text-dark">12.toCharArray():</span>The java string toCharArray() method converts this string into character array. It returns a newly created character array,<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public char[] toCharArray()  </p>
              <span className="text-dark">13.toLowerCase():</span>The java string toLowerCase() method returns the string in lowercase letter<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String toLowerCase()  </p>
              <span className="text-dark">14.toUpperCase():</span>The java string toUpperCase() method returns the string in lowercase letter<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String toUpperCase()  </p>
              <span className="text-dark">15.trim():</span>The Java String class trim() method eliminates leading and trailing spaces.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String trim()    </p>

            </p>

          </div>
        </div>


        <div className="three-div">
          <img src="data:image/png;base64,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" alt="java" />
          <button className="btn btn-success rounded-3 mt-4">Download PDF</button>

        </div>

      </div>
    </>
  );
}

export default React;