
import "../Java/Java.css";


const Javascript = () => {
  return (
    <>
      <div className="java d-flex flex-row  gap-2">

        <div className="one-div p-3 text-start">
          <h6 className="text-primary text-center fw-bold">Table of content</h6>
          <p><a href="#">introduction to Javascript</a></p>
          <p><a href="#">Javascript interview questions for freshers</a></p>
          <p><a href="#">Javascript interview questions for experienced</a></p>
          <p><a href="#">Javascript domains</a></p>
          <p><a href="#"></a>Javascript importance</p>
          <p><a href="#">introduction to Javascript</a></p>
          <p><a href="#">Javascript interview questions for freshers</a></p>
          <p><a href="#">Javascript interview questions for experienced</a></p>
          <p><a href="#">Javascript domains</a></p>
          <p><a href="#"></a>Javascript importance</p>
          <p><a href="#">conclusion</a></p>


        </div>

        <div className="two-div d-flex flex-column justify-content-start">

          <h3 className="text-dark ">Top 50 Javascript sample Interview Questions and answers</h3>
          <div className="d-flex flex-row justify-content-between">
            <p className="fw-bold text-secondary"><span className="text-dark">By</span> Gangadhar</p>
            <p className="text-secondary fw-bold"><i class="fa-duotone fa-calendar-days"></i>20 june 2024</p>
          </div>

          <img className="javascript-img" src="https://www.i2tutorials.com/wp-content/media/2018/11/Java-Scripti2tutorials.com_.png" />

          <p>JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language.
            It is also known as the scripting language for webpages.
            It is well-known for the development of web pages, and many non-browser environments also use it.</p>


          <p>It was created in 1995 by Brendan Eich while he was an engineer at Netscape. It was originally going to be named LiveScript but was renamed.
            Unlike most programming languages, JavaScript language has no concept of input or output. It is designed to run as a scripting language in a host environment,
            and it is up to the host environment to provide mechanisms for communicating with the outside world. </p>

          <p>JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects,
            like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. </p>



          <div>
            <h5 className="text-dark fw-bold fs-small">1.What is Javascript?</h5>
            <p>JavaScript is a programming language that developers use to make interactive webpages. From refreshing social media feeds to displaying
              animations and interactive maps, JavaScript functions can improve a website's user experience. As a client-side scripting language, it is one
              of the core technologies of the World Wide Web. For example, when browsing the internet, anytime you see an image carousel, a click-to-show dropdown menu,
              or dynamically changing element colors on a webpage, you see the effects of JavaScript.</p>
            <h7 className="fw-bold">Javascript Example:</h7>
            <div className="bg-light">
              <p className="text-success">
                document.getElementById("demo").innerHTML = "Hello JavaScript";
              </p>
            </div>


            <h5 className="text-dark fw-bold fs-small">2.How to Link JavaScript File in HTML ?</h5>
            <p>JavaScript can be added to HTML file in two ways:
              <ul>
                <li><span className="text-dark">1.Internal Js:</span>We can add JavaScript directly to our HTML file by writing the code inside the script tag. The script tag can either be placed inside the head or the body tag according to the requirement. </li>
                <li><span className="text-dark">2.External js:</span>We can write JavaScript code in another files having an extension.js and then link this file inside the head tag of the HTML file in which we want to add this code. </li>
              </ul>
            </p>
            <p className="text-dark">Exapmle:</p>
            <p className="text-success bg-light"> script
              console.log("Welcome to GeeksforGeeks");
              /script </p>

            <h5 className="text-dark fw-bold fs-small">3.What are feautures of javascript?</h5>
            <p>
              <ul>
                <li>Performs Form Validation although the forms are created using HTML</li>
                <li>No compiler is needed.</li>
                <li>Can handle date and time.</li>
                <li>Functions in JS are objects. They may have properties and methods just like other objects. They can be passed as arguments in other functions.</li>
              </ul>
            </p>

            <h5 className="text-dark fw-bold fs-small">4.What are the Applications of JavaScript</h5>
            <p>
              <ol>
                <li><span className="text-success fw-bold">Web Applications:</span> language was required to create robust web applications. When we explore a map in Google Maps then we only need to click and drag the mouse. All detailed view is just a click away, and this is possible only because of JavaScript. </li>
                <li><span className="text-success fw-bold">Games:</span>Not only in websites, but JavaScript also helps in creating games for leisure. The combination of JavaScript and HTML 5 makes JavaScript popular in game development as well. </li>
                <li><span className="text-success fw-bold">Smart Watches:</span>JavaScript is being used in all possible devices and applications. It provides a library PebbleJS which is used in smartwatch applications. This framework works for applications that require the Internet for their functioning. </li>
                <li><span className="text-success fw-bold">Mobile Applications:</span>JavaScript can also be used to build an application for non-web contexts. The features and uses of JavaScript make it a powerful tool for creating mobile applications. This is a Framework for building web and mobile apps using JavaScript. Using React Native </li>
                <li><span className="text-success fw-bold">Server Applications:</span>With the help of Node.js, JavaScript made its way from client to server and Node.js is the most powerful on the server side. </li>
              </ol>
            </p>

            <h5 className="text-dark fw-bold fs-small">5.What are Limitations of Javascript?</h5>
            <p><span className="text-dark">1.Performance:</span> JavaScript does not provide the same level of performance as offered by many traditional languages as a complex program written in JavaScript would be comparatively slow. But as JavaScript is used to perform simple tasks in a browser, so performance is not considered a big restriction in its use.</p>
            <p><span className="text-dark">2.Security risks:</span>JavaScript can be used to fetch data using AJAX or by manipulating tags that load data such as img object script. These attacks are called cross-site script attacks.</p>
            <p><span className="text-dark">3.Complexity:</span>To master a scripting language, programmers must have a thorough knowledge of all the programming concepts, core language objects, and client and server-side objects otherwise it would be difficult for them to write advanced scripts using JavaScript.
            </p>

            <h5 className="text-dark fw-bold fs-small">6.Is JavaScript Compiled or Interpreted or both ?</h5>
            <p>JavaScript is both compiled and interpreted. In the earlier versions of JavaScript, it used only the interpreter that executed code line by line and shows the result immediately. But with time the performance became an issue as interpretation is quite slow. Therefore, in the newer versions of JS, probably after the V8, the JIT compiler was also incorporated to optimize the execution and display the result more quickly. This JIT compiler generates
              a bytecode that is relatively easier to code. This bytecode is a set of highly optimized instructions. </p>


            <h5 className="text-dark fw-bold fs-small">7.What are let,const,var keywords?</h5>
            <p><span className="text-success fw-bold">1.Let:</span>he let keyword was introduced in ES6 (2015).<br />
              Variables declared with let have Block Scope.<br />
              Variables declared with let must be Declared before use.<br />
              Variables declared with let cannot be Redeclared in the same scope.<br />
              ES6 introduced the two new JavaScript keywords: let and const.These two keywords provided Block Scope in JavaScript.</p>
            <p><span className="text-success fw-bold">2.const:</span>
              The const keyword was introduced in ES6 (2015).<br />
              Variables defined with const cannot be Redeclared.<br />
              Variables defined with const cannot be Reassigned.<br />
              Variables defined with const have Block Scope.<br />
            </p>
            <p><span className="text-success fw-bold">3.var:</span>
              The var keyword should only be used in code written for older browsers.
            </p>

            <h5 className="text-dark fw-bold fs-small">8.What is javascript function?</h5>
            <p>A JavaScript function is a block of code designed to perform a particular task.A JavaScript function is executed when "something" invokes it (calls it).
              A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().Function names can contain letters, digits, underscores,
              and dollar signs (same rules as variables).The parentheses may include parameter names separated by commas:(parameter1, parameter2, ...)The code to be executed, by the function, is placed inside curly brackets: { }
            </p>
            <p>Example:</p>
            <p className="text-succes bg-light">
            // Function is called, the return value will end up in x<br />
              let x = myFunction(4, 3);<br />
              function myFunction(a, b) <br />
              ret a * b; <br />
            </p>

            <h5 className="text-dark fw-bold fs-small">9.Is Javascript single-threaded??</h5>
            <p>Yes, JavaScript is a single-threaded language. This means that it has only one call stack and one memory heap. Only one set of instructions is executed at a time.
              Javascript is Synchronous and blocking in nature. meaning that code is executed line by line and one task must be completed before the next one begins.
              However, JavaScript also has asynchronous capabilities, which allow certain operations to be executed independently of the main execution thread. This is commonly achieved through mechanisms like callbacks, promises, async/await, and event listeners.
              These asynchronous features enable JavaScript to handle tasks such as fetching data.
            </p>




            <h5 className="text-dark fw-bold fs-small">10.Different data types in Javascript?</h5>
            <p>JavaScript is a dynamic and loosely typed, or duck-typed language. It means that we do not need to specify the type of variable because the JavaScript engine dynamically determines the data type of a variable based on its values.
              <br />There are 2 types of data types in Java as mentioned below:
              <br />
              1.Primitive Data Type
              <br />
              2.Reference Data Type
              <br />
              <span className="text-success fw-bold">Primitive Data Type: </span>Primitive data are single values with no special capabilities.
              There are 3 primitive data types:
              <ol>
                <li><span className="text-dark">Number: </span>stores value numbers</li>
                <li><span className="text-dark">String: </span>stores characters</li>
                <li><span className="text-dark">Boolean: </span>stores true or false</li>
              </ol>

              <span className="text-success fw-bold">Non-Primitive Data Type: </span>Reference Data types will contain a memory address of the variable’s
              values because it is not able to directly
              store the values in the memory. Types of Non-Primitive are mentioned below:
              <ul className="text-dark">
                <li>Arrays</li>
                <li>Object</li>
              </ul>
            </p>


            <h5 className="text-dark fw-bold fs-small">11.What is callback function and callback hell ??</h5>
            <p>callbacks are commonly used to handle asynchronous operations.Callback function is a function that is passed as an argument to another function and is intended to be executed after the completion of a specific task or at a given time.</p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>
            <p>Callback Hell, also known as “Pyramid of Doom” is a term used in JavaScript programming to describe a situation where multiple nested callbacks are used within asynchronous functions.
              “It occurs when asynchronous operations depend on the results of previous asynchronous operations, resulting in deeply nested and often hard-to-read code.”
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>



            <h5 className="text-dark fw-bold fs-small">12.What is Promise and Promise chaining?</h5>
            <p>A Promise is an object in JavaScript used for asynchronous computations. It represents the result of an asynchronous operation, the result may be resolved or rejected.<br />
              Promises have three states:
              <ul className="text-dark"><li><span className="text-success fw-bold">Pending: </span>The initial state. This is the state in which the Promise’s eventual value is not yet available.</li>
                <li><span className="text-success fw-bold">Fullfilled: </span>The state in which the Promise has been resolved successfully, and the eventual value is now available.</li>
                <li><span className="text-success fw-bold">Rejected: </span>The state in which the Promise has encountered an error or has been rejected, and the eventual value cannot be provided.</li>
              </ul></p>
            <p>Promise constructor has two parameters (resolve, reject) which are functions. If the async task has been completed without errors then call the resolve function with message or fetched data to resolve the promise.
              <br />If an error occurred then call the reject function and pass the error to it.<br />we can access the result of promise using .then() handler.<br />
              we can catch the error in the .catch() handler.</p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>
            <p>The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.
              It involves chaining multiple .then() methods to a Promise to perform a series of tasks in a specific order.</p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>


            <h5 className="text-dark fw-bold fs-small">13. What is async/await?</h5>
            <p>Async/await is a modern approach to handling asynchronous code in JavaScript. It provides a more concise and readable way to work with Promises and async operations, effectively avoiding the “Callback Hell” and improving the overall structure of asynchronous code.
              <br />In JavaScript, the async keyword is used to define an asynchronous function, which returns a Promise.<br />
              Within an async function, the await keyword is used to pause the execution of the function until a Promise is resolved, effectively allowing for synchronous-looking code while working with asynchronous operations.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>



            <h5 className="text-dark fw-bold fs-small">14.What is the difference between == and === operators ?</h5>
            <p>== (Loose Equality Operator): This operator performs type coercion, which means it converts the operands to the same type before making the comparison. It checks if the values are equal without considering their data types. For example, 1 == '1' will return true because JavaScript converts the string '1' to a number before comparison.
              <br />
              === (Strict Equality Operator): This operator performs a strict comparison without type coercion. It checks if both the values and their data types are equal. For example, 1 === '1' will return false because the data types are different (number and string).


            </p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>


            <h5 className="text-dark fw-bold fs-small">15.What is rest and spread operator?</h5>
            <p>The rest operator, represented by three dots (...), is used in function parameters to collect a variable number of arguments into an array. It allows you to pass an arbitrary number of arguments to a function without explicitly defining them as named parameters.
              <br />The spread operator, also denoted by three dots (...), is used to spread the elements of an array or object into another array or object. It allows you to easily clone arrays, concatenate arrays, and merge objects.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>



            <h5 className="text-dark fw-bold fs-small">16.What is a higher-order function??</h5>
            <p>Higher-order function in JavaScript is a function that either takes one or more functions as arguments or returns a function as its result. In other words, it operates on functions, either by taking them as arguments, returning them, or both.
              They enable powerful techniques such as function composition, currying, and callback-based asynchronous operations.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>




            <h5 className="text-dark fw-bold fs-small">17.What is Closure? What are the use cases of Closures??</h5>
            <p>Closure is a feature that allows the function to capture the environment (or to retain access to variables from the scope ) where it is defined, even after that scope has closed.
              <br />We can say the closure is a combination of a function and lexical environment where that function is defined.
              <br />In other words, a closure gives a function access to its own scope, the scope of its outer function, and the global scope, allowing it to “remember” and continue to access variables and parameters from these scopes.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-dark bg-light">

            </p>
            <p>Importance of closure:</p>
            <ol className="text-secondary">
              <li><span className="text-dark">1.Data Privacy :</span>Closures can be used to create private data and encapsulate functionality within a limited scope. By defining functions within another function, the inner functions have access to the outer function’s variables, but these variables are inaccessible from outside the outer function. This allows for the creation of private data and methods that are not directly accessible from the outside</li>
              <li><span className="text-dark">2.Currying and Partial Application:</span>Closures facilitate functional programming techniques such as currying and partial application. By using closures to capture and remember specific parameters and return a new function that uses these captured parameters, currying and partial application can be achieved. </li>
              <li><span className="text-dark">3.Callback Functions:</span>Closures are often employed when working with callback functions. A closure can be used to capture and maintain the state of variables within the context of an asynchronous operation, ensuring that the correct variables are accessible when the callback function is invoked.</li>
            </ol>



            <h5 className="text-dark fw-bold fs-small">18.Explain the concept of hoisting in JavaScript?</h5>
            <p>Hoisting in JavaScript is the default behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the actual code execution. This means that you can use a variable or call a function before it’s declared in your code.
              <br />When you declare a variable using var, the declaration is hoisted to the top of its containing function or block and initialized with the default value of “undefined”.
              <br />Variables declared with let and const are hoisted as well but have a "temporal dead zone" where they cannot be accessed before their declaration.
              <br />Hoisting is not happening with an arrow function, function expression, or variable initialization.
            </p>
            <p>Exapmle</p>

            <h5 className="text-dark fw-bold fs-small">19.What is a Temporal dead zone??</h5>
            <p>The Temporal Dead Zone (TDZ) is a concept in JavaScript related to variable declarations using let and const.
              <br />When you declare a variable with let or const, it is hoisted to the top of its containing scope, However, unlike var, variables declared with let and const remain uninitialized in the TDZ.
              <br />Any attempt to access or use the variable before its actual declaration within the scope will result in a ReferenceError. This is to prevent the use of variables before they have been properly defined.
            </p>



            <h5 className="text-dark fw-bold fs-small">20.What is a prototype chain??</h5>
            <p>In JavaScript, every function and object has a property named prototype by default.
              <br />Every object in JavaScript has a prototype. A prototype is another object from which the current object inherits properties and methods. You can think of the prototype as a template or a parent object.
              <br />The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects
              <br />When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks up the prototype chain until it finds the property or method. This process continues until it reaches the Object.prototype at the top of the chain.
            </p>




            <h5 className="text-dark fw-bold fs-small">21.What is the difference between Call, Apply, and Bind methods??</h5>
            <p><span className="text-dark">Call: </span>The call() method invokes a function with a specified this value and individual arguments passed as comma-separated values. </p>
            <p>Exapmle:</p>
            <p><span className="text-dark">Apply: </span>Invokes the function with a given this value but it accepts arguments as an array. It is useful when the number of arguments to be passed is not known in advance or when the arguments are already in an array.</p>
            <p>Exapmle:</p>
            <p><span className="text-dark">bind:</span> instead of invoking it returns a new function and allows you to pass any number of arguments. bind() method takes an object as first argument and create a new function.</p>
            <p>Exapmle:</p>



            <h5 className="text-dark fw-bold fs-small">22.What are arrow functions?</h5>
            <p>
              Arrow functions are a feature introduced in JavaScript (ES6) that is a more concise syntax for writing function expressions. They have a shorter syntax compared to traditional function expressions and are particularly useful for creating anonymous functions and working with functional programming concepts.

            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              () = a+b;
            </p>


            <h5 className="text-dark fw-bold fs-small">23.What is the currying function?</h5>
            <p>
              Currying is a technique in functional programming that transforms a function with multiple arguments into a series of functions, each taking a single argument. These curried functions can be composed together to build more complex functions.
              In JavaScript, you can implement currying using closures and returning functions.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              function curryAdd(x) <br />
              return function(y) <br />
              return x + y;  <br />
              const add5 = curryAdd(5); <br />
              console.log(add5(3));
            </p>


            <h5 className="text-dark fw-bold fs-small">24.What are the features of ES6?</h5>
            <p>
              ES6, also known as ECMAScript 2015, introduced several new features and enhancements to JavaScript, significantly expanding the language’s capabilities. Some key features of ES6 include:
            </p>
            <ol>
              <li>Arrow functions</li>
              <li>Block scoped variables</li>
              <li>Spread operator</li>
              <li>Promises</li>
              <li>Destructuring</li>
              <li>Map,set</li>
              <li>Iterators,Generators</li>
              <li>Object Literals</li>
              <li>Modules</li>
              <li>Classess</li>
            </ol>


            <h5 className="text-dark fw-bold fs-small">25.What is Execution context, execution stack, variable object, and scope chain?</h5>
            <p>
              <span className="text-dark">Execution Context:</span>the execution context refers to the environment in which a piece of code is executed. It consists of the scope, variable object, and the value of the “this” keyword.
              <br />Whenever a function is executed, an execution context is created and it contains all the variables or properties of that function.
            </p>
            <p> <span className="text-dark">Execution Stack:</span>It is also known as the “call stack,” a LIFO (Last in, First out) data structure that stores all the execution context of the function calls that are in progress. When a function is called, a new execution context is created and pushed onto the stack. When the function completes, its context is popped off the stack.
              <br />The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches the context below it in the current stack.</p>

            <p> <span className="text-dark">Scope chain:</span>The scope chain is a mechanism for resolving the value of a variable in JavaScript. When a variable is referenced, the JavaScript engine looks for the variable first in the current execution context’s variable object. If it’s not found there, it continues to the next outer execution context, following the scope chain, until it finds the variable or reaches the global execution context.</p>



            <h5 className="text-dark fw-bold fs-small">25.Difference between Call by Value and Call by reference?</h5>
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrltazgA2PN1iVP6HgNR8G8WEs9hbrhp5QHA&s" alt="java" />
          <button className="btn btn-success rounded-3 mt-4">Download PDF</button>

        </div>

      </div>
    </>
  );
}

export default Javascript;