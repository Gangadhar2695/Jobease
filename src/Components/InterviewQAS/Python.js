
import "../Java/Java.css";


const Python = () => {
  return (
    <>
      <div className="java d-flex flex-row  gap-2">

        <div className="one-div p-3 text-start">
          <h6 className="text-center text-primary fw-bold">Table of content</h6>
          <p><a href="#">introduction to Python</a></p>
          <p><a href="#">Python interview questions for freshers</a></p>
          <p><a href="#">Python interview questions for experienced</a></p>
          <p><a href="#">Python domains</a></p>
          <p><a href="#"></a>Python importance</p>
          <p><a href="#">introduction to Python</a></p>
          <p><a href="#">Python interview questions for freshers</a></p>
          <p><a href="#">Python interview questions for experienced</a></p>
          <p><a href="#">Python domains</a></p>
          <p><a href="#"></a>Python importance</p>
          <p><a href="#">conclusion</a></p>


        </div>

        <div className="two-div d-flex flex-column justify-content-start">

          <h3 className="text-dark ">Top 50 Java Programming Interview Questions and Answers</h3>
          <div className="d-flex flex-row justify-content-between">
            <p className="fw-bold text-secondary"><span className="text-dark">By</span> Gangadhar</p>
            <p className="text-secondary fw-bold"><i class="fa-duotone fa-calendar-days"></i>20 june 2024</p>
          </div>

          <img className="python-img" src="https://thumbs.dreamstime.com/b/python-programming-language-server-room-background-programing-workflow-abstract-algorithm-concept-virtual-screen-141876825.jpg" />

          <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.The most recent major version of Python is Python 3.
            Python was designed for readability, and has some similarities to the English language with influence from mathematics.
            Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
          </p>

          <p>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).<br />
            Python has a simple syntax similar to the English language.<br />
            Python has syntax that allows developers to write programs with fewer lines than some other programming languages.<br />
            Python can be treated in a procedural way, an object-oriented way or a functional way.
          </p>

          <p>Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community.
            Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0.[36] Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward-compatible with earlier versions. Python 2.7.18, released in 2020, was the last release of Python 2.

          </p>



          <div>
            <h5 className="text-dark fw-bold fs-small">1.What is Python? List some popular applications of Python</h5>
            <p>Python is a widely-used general-purpose, high-level programming language. It was created by Guido van Rossum in 1991 and further developed by the Python Software Foundation. It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code.
              <ul><li>System Scripting</li>
                <li> Web Development</li>
                <li> Game Development</li>
                <li>Software Development</li>
                <li>Complex Mathematics</li></ul>
            </p>
            <h7 className="fw-bold">Pyhton Example:</h7>
            <div className="bg-light">
              <p className="text-success">

              </p>
            </div>


            <h5 className="text-dark fw-bold fs-small">2.Is Python a compiled language or an interpreted language?</h5>
            <p>Actually, Python is a partially compiled language and partially interpreted language. The compilation part is done first when we execute our code and this will generate byte code internally this byte code gets converted by the Python virtual machine(p.v.m) according to the underlying platform(machine+operating system).
            </p>

            <h5 className="text-dark fw-bold fs-small">3.What are Built-in data types in Python?</h5>
            <p> <span className="text-success">1.Numeric:</span> The numeric data type in Python represents the data that has a numeric value. A numeric value can be an integer, a floating number, a Boolean, or even a complex number.<br />
              <span className="text-success">2.Sequence Types:</span>  The sequence Data Type in Python is the ordered collection of similar or different data types. There are several sequence types in Python:
              <ul className="text-success">
                <li>Python String</li>
                <li>Python List</li>
                <li>Python Tuple</li>
                <li>Python Range</li>
              </ul>
              <span className="text-success">3.Mapping Types:</span> In Python, hashable data can be mapped to random objects using a mapping object. There is currently only one common mapping type, the dictionary, and mapping objects are mutable.<br />
              <p className="text-success">1.Python Dictionary</p>
              <span className="text-success">4.Set Types:</span> In Python, a Set is an unordered collection of data types that is iterable, mutable, and has no duplicate elements. The order of elements in a set is undefined though it may consist of various elements.
            </p>

            <h5 className="text-dark fw-bold fs-small">4.What is a dynamically typed language?</h5>
            <p>Typed languages are the languages in which we define the type of data type and it will be known by the machine at the compile-time or at runtime. Typed languages can be classified into two categories:
              <br />
              <ul>
                <li> <span className="text-success">1.Statically Typed Language:</span>In this type of language, the data type of a variable is known at the compile time which means the programmer has to specify the data type of a variable at the time of its declaration. </li>
                <li> <span className="text-success">2.Dynamically Typed Language:</span>These are the languages that do not require any pre-defined data type for any variable as it is interpreted at runtime by the machine itself. In these languages, interpreters assign the data type to a variable at runtime depending on its value.</li>
              </ul>
            </p>

            <h5 className="text-dark fw-bold fs-small">5. What is docstring in Python?</h5>
            <p>Python documentation strings (or docstrings) provide a convenient way of associating documentation with Python modules, functions, classes, and methods.
              <li> <span className="text-success">1.Declaring Docstrings:</span>The docstrings are declared using ”’triple single quotes”’ or “””triple double quotes””” just below the class, method, or function declaration. All functions should have a docstring.</li>
              <li> <span className="text-success">2.Accessing Docstrings:</span>The docstrings can be accessed using the __doc__ method of the object or using the help function. </li>
            </p>


            <h5 className="text-dark fw-bold fs-small">6.What is Scope in Python?</h5>
            <p>  <li><span className="text-success">1.Python Local Variables:</span> Local variables are those that are initialized within a function and are unique to that function. It cannot be accessed outside of the function.</li>
              <li><span className="text-success">2.Python Global Variables:</span>Global variables are the ones that are defined and declared outside any function and are not specified to any function.</li>
              <li><span className="text-success">3.Module level Scope  :</span> It refers to the global objects of the current module accessible in the program.</li>
              <li><span className="text-success">4.Outer Scope  :</span>  It refers to any built-in names that the program can call. The name referenced is located last among the objects in this scope.</li>
            </p>


            <h5 className="text-dark fw-bold fs-small">7.What is swapcase function in Python??</h5>
            <p>It is a string’s function that converts all uppercase characters into lowercase and vice versa. It is used to alter the existing case of the string. This method creates a copy of the string which contains all the characters in the swap case.

            </p>
            <p>Exapmle:</p>
            <p className="text-success bg-light">string = "GeeksforGeeks"<br />
              string.swapcase() --- "gEEKSFORgEEKS"
            </p>


            <h5 className="text-dark fw-bold fs-small">8.What are the key features of Python?</h5>
            <p>Python is a high-level, interpreted, and general-purpose programming language. Some of its key features include
            </p>
            <ul>
              <li>Easy to read Syntax</li>
              <li>Dynamically Typed</li>
              <li>Object oriented,Functional and Procedural Paradigms</li>
              <li>Extensive standard library</li>
              <li>Strong community support</li>
              <li>Cross-platform compatibility</li>
              <li>Easy to learn for beginners</li>
            </ul>

            <h5 className="text-dark fw-bold fs-small">9.How do you create a function in Python??</h5>
            <p>To create a function in Python, use the `def` keyword followed by the function name and parentheses containing any input parameters. For example:
            </p>
            <p>Exapmle:</p>
            <p className="text-success bg-light">def add_numbers(a, b):<br />
              return a + b
            </p>


            <h5 className="text-dark fw-bold fs-small">10.What is the difference between a list and a tuple in Python??</h5>
            <p>Lists and tuples are both sequence data types in Python. The main differences between them are:

              <ul>
                <li>Lists are mutable, meaning their elements can be changed, while tuples are immutable.</li>
                <li>Lists use square brackets `[]`, while tuples use parentheses `()`.</li>
                <li>Lists generally have a variable length, while tuples have a fixed length.</li>
              </ul>
            </p>

            <h5 className="text-dark fw-bold fs-small">11.What is a lambda function in Python?</h5>
            <p>A lambda function is an anonymous, single-expression function that can be used as an inline function. It is defined using the `lambda` keyword, followed by input parameters, a colon, and an expression.
            </p>
            <p className="text-success">Example:</p>
            <p className="text-success bg-light">add = lambda x, y: x + y <br />
              result = add(3, 4)  # result is 7</p>


            <h5 className="text-dark fw-bold fs-small">12. How do you handle exceptions in Python?</h5>
            <p>In Python, you can handle exceptions using the try, except, else, and finally blocks. The try block contains the code that might raise an exception, while the except block catches and handles the exception. The optional else block is executed if no exception is raised in the try block, and the finally block, also optional, is executed regardless of whether an exception occurs or not.</p>
            <p className="text-success">Example:</p>
            <p className="text-success bg-light">
              def divide(a, b):  <br />
              try:   <br />
              result  = a / b    <br />
              except ZeroDivisionError:   <br />
              print("Error: Division by zero is not allowed.")   <br />
              except TypeError:    <br />
              print("Error: Invalid input types. Both arguments must be numbers.")   <br />
              else:   <br />
              print(f"Result: result")    <br />
              finally:   <br />
              print("Division operation completed.")   <br />
              divide(10, 2)  # Result: 5.0, Division operation completed.
            </p>


            <h5 className="text-dark fw-bold fs-small">13.What are function decorators in Python??</h5>
            <p>Decorators are functions that modify the behavior of other functions or methods without changing their code. They are applied using the `@decorator` syntax above the function definition.
            </p>
            <p className="text-success">Example:</p>
            <p className="text-success bg-light">
              def my_decorator(func):  <br />
              def wrapper():  <br />
              print("Something is happening before the function is called.")  <br />
              func()  <br />
              print("Something is happening after the function is called.")  <br />
              return wrapper  <br /><br />

              @my_decorator  <br />
              def say_hello():  <br />
              print("Hello!")   <br /><br />

              say_hello()  <br />
            </p>

            <h5 className="text-dark fw-bold fs-small">14.What are metaclasses in Python?</h5>
            <p>
              Metaclasses are classes that define the behavior of other classes. In Python, a metaclass is responsible for creating, modifying, and initializing classes. By default, the `type` class is the metaclass for all classes in Python. You can create custom metaclasses by subclassing `type` and overriding its methods.
            </p>

            <h5 className="text-dark fw-bold fs-small">15. What is the difference between `staticmethod`, `classmethod`, and instance methods in Python?</h5>
            <p><span className="text-dark">1.static method :</span>A static method is a method that belongs to a class rather than an instance of the class. It does not have access to instance or class variables and is defined using the `@staticmethod` decorator.<br />
              <span className="text-dark">2.class method :</span>A class method is a method that belongs to a class and has access to class variables. It takes a reference to the class as its first argument and is defined using the `@classmethod` decorator.<br />
              <span className="text-dark">3.instance method:</span>An instance method is a method that belongs to an instance of a class and has access to instance variables. It takes a reference to the instance as its first argument (usually named `self`).
            </p>

            <h5 className="text-dark fw-bold fs-small">16.What is the global interpreter lock (GIL) in Python?</h5>
            <p>The global interpreter lock (GIL) is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes concurrently in the same process. This lock is mandatory because CPython's memory management is not thread-safe. GIL has some advantages, including the increased performance of single-threaded programs and the ability to easily integrate non-thread-safe C libraries into Python code.
              However, the GIL can limit the performance of CPU-bound and multithreaded programs in Python.
            </p>

            <h5 className="text-dark fw-bold fs-small">17.What are Python's generators and the `yield` keyword?</h5>
            <p>Generators are special types of iterators that allow you to iterate over a potentially infinite sequence of items without storing them in memory. They are defined using functions that contain the `yield` keyword. When a generator function is called, it returns a generator object without executing the function. The function is only executed when the generator's `__next__()` method is called. The method can be called a) directly, b) using a built-in function next() or c) via a loop. For example:
            </p>
            <p>Exapmle:</p>
            <p className="text-success bg-light">def count_up():   <br />
              count = 1   <br />
              while True:   <br />
              yield count    <br />
              count += 1   <br />

              counter = count_up()   <br />

              # a) direct call    <br />
              print(counter.__next__())    <br />

              # b) using next()    <br />
              print(next(counter))  # 1</p>    <br />



            <h5 className="text-dark fw-bold fs-small">18.How would you find the most common elements in a list?</h5>
            <p>
              You can use the `collections.Counter` class to count the occurrences of elements in the list and then use the `most_common()` method to find the most common elements:
            </p>
            <p>Example:</p>
            <p className="text-success bg-light">
              from collections import Counter  <br />

              my_list = [1, 2, 3, 2, 1, 3, 1, 1, 2, 3, 4, 5]   <br />
              counter = Counter(my_list)    <br />
              most_common_elements = counter.most_common()     <br />

            </p>

            <h5 className="text-dark fw-bold fs-small">19. What is the difference between deep and shallow copy?</h5>
            <p>
              Shallow copy is used when a new instance type gets created and it keeps the values that are copied in the new instance. Shallow copy is used to copy the reference pointers just like it copies the values. These references point to the original objects and the changes made in any member of the class will also affect the original copy of it. Shallow copy allows faster execution of the program and it depends on the size of the data that is used.
            </p>
            <p>
              Deep copy is used to store the values that are already copied. Deep copy doesn’t copy the reference pointers to the objects. It makes the reference to an object and the new object that is pointed by some other object gets stored. The changes made in the original copy won’t affect any other copy that uses the object. Deep copy makes execution of the program slower due to making certain copies for each object that is been called.
            </p>



            <h5 className="text-dark fw-bold fs-small">20.How would you implement a simple pagination system in Python?</h5>
            <p>
              Import math module to make it simple
            </p>
            <h5>Pagination Exmaple:</h5>
            <p className="bg-light text-success">import math   <br />
              def paginate(items, page, items_per_page):    <br />
              total_pages = math.ceil(len(items) / items_per_page)    <br />
              start_index = (page - 1) * items_per_page    <br />
              end_index = start_index + items_per_page     <br />
              return items[start_index:end_index]      <br />
              items = list(range(1, 101))   <br />
              current_page = 1    <br />
              items_per_page = 10   <br />
              page_items = paginate(items, current_page, items_per_page)     <br />
            </p>



            <h5 className="text-dark fw-bold fs-small">21.Does Python have OOPS concepts?</h5>
            <p>
              Python is an object-oriented programming language. This means that any program can be solved in python by creating an object model. However, Python can be treated as a procedural as well as structural language.
            </p>



            <h5 className="text-dark fw-bold fs-small">22.How can the ternary operators be used in python?</h5>
            <p>
              The Ternary operator is the operator that is used to show the conditional statements. This consists of the true or false values with a statement that has to be evaluated for it.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              The Ternary operator will be given as:   <br />
              [on_true] if [expression] else [on_false]x, y = 25, 50big = x if x less than y else y
            </p>


            <h5 className="text-dark fw-bold fs-small">23.How to comment multiple lines in python?</h5>
            <p>
              Multi-line comments appear in more than one line. All the lines to be commented are to be prefixed by a #. You can also a very good shortcut method to comment multiple lines. All you need to do is hold the ctrl key and left click in every place wherever you want to include a # character and type a # just once. This will comment all the lines where you introduced your cursor.
            </p>



            <h5 className="text-dark fw-bold fs-small">24.What is pickling and unpickling??</h5>
            <p>
              Pickle module accepts any Python object and converts it into a string representation and dumps it into a file by using dump function, this process is called pickling. While the process of retrieving original Python objects from the stored string representation is called unpickling.
            </p>


            <h5 className="text-dark fw-bold fs-small">25. What is the difference between Python Arrays and lists??</h5>
            <p>Arrays and lists, in Python, have the same way of storing data. But, arrays can hold only a single data type elements whereas lists can hold any data type elements.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              import array as arr  <br />
              My_Array=arr.array('i',[1,2,3,4])   <br />
              My_list=[1,'abc',1.20]  <br />
              print(My_Array)   <br />
              print(My_list)   <br />
            </p>


            <h5 className="text-dark fw-bold fs-small">26. How to install Python on Windows and set path variable??</h5>
            <p>
              To install Python on Windows, follow the below steps:<br />
              <li>Install python from this link: https://www.python.org/downloads/</li>
              <li>After this, install it on your PC. Look for the location where PYTHON has been installed on your PC using the following command on your command prompt: cmd python.
              </li>
              <li>Then go to advanced system settings and add a new variable and name it as PYTHON_NAME and paste the copied path.
              </li>
              <li>Look for the path variable, select its value and select ‘edit’.
              </li>
              <li>Add a semicolon towards the end of the value if it’s not present and then type %PYTHON_HOME%
              </li>

            </p>


            <h5 className="text-dark fw-bold fs-small">27.What is type conversion in Python?</h5>
            <p>
              <span className="text-dark">int()</span>converts any data type into integer type   <br />
              <span className="text-dark">float()</span>converts any data type into float type   <br />
              <span className="text-dark">ord()</span>converts characters into integer     <br />
              <span className="text-dark">hex()</span>converts integers to hexadecimal    <br />
              <span className="text-dark">oct()</span>converts integer to octa    <br />
              <span className="text-dark">tuple()</span> This function is used to convert to a tuple.  <br />
              <span className="text-dark">set()</span>This function returns the type after converting to set.<br />
              <span className="text-dark">list()</span> This function is used to convert any data type to a list type.   <br />
              <span className="text-dark">dict()</span> This function is used to convert a tuple of order (key, value) into a dictionary   <br />
              <span className="text-dark">str()</span>Used to convert integer into a string.
            </p>


            <h5 className="text-dark fw-bold fs-small">28. What is a dictionary in Python?</h5>
            <p>The built-in datatypes in Python is called dictionary. It defines one-to-one relationship between keys and values. Dictionaries contain pair of keys and their corresponding values. Dictionaries are indexed by keys. </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              dict='Country':'India','Capital':'Delhi','PM':'Modi' <br />
              print dict[Country]  <br />
              Output:India    <br />
              print dict[Capital]   <br />
              Output:Delhi    <br />

            </p>


            <h5 className="text-dark fw-bold fs-small">29. How is Multithreading achieved in Python?</h5>
            <p>
              <ol>
                <li>Python has a multi-threading package but if you want to multi-thread to speed your code up, then it’s usually not a good idea to use it.
                </li>
                <li>Python has a construct called the Global Interpreter Lock (GIL). The GIL makes sure that only one of your ‘threads’ can execute at any one time. A thread acquires the GIL, does a little work, then passes the GIL onto the next thread.
                </li>
                <li>This happens very quickly so to the human eye it may seem like your threads are executing in parallel, but they are really just taking turns using the same CPU core.
                </li>
                <li>All this GIL passing adds overhead to execution. This means that if you want to make your code run faster then using the threading package often isn’t a good idea.
                </li>
              </ol>
            </p>


            <h5 className="text-dark fw-bold fs-small">30.Explain Inheritance in Python with an example.?</h5>
            <p>Inheritance allows One class to gain all the members(say attributes and methods) of another class. Inheritance provides code reusability, makes it easier to create and maintain an application. The class from which we are inheriting is called super-class and the class that is inherited is called a derived / child class.</p>
            <ol className="text-secondary">
              <li><span className="text-success">Single Inheritance:</span>where a derived class acquires the members of a single super class.</li>
              <li><span className="text-success">Multi-level Inheritance:</span>a derived class d1 in inherited from base class base1, and d2 are inherited from base2.</li>
              <li><span className="text-success">Hierarchial Inheritance:</span>from one base class you can inherit any number of child classes</li>
              <li><span className="text-success">Multiple Inheritance:</span>a derived class is inherited from more than one base class.</li>
            </ol>

            <h5 className="text-dark fw-bold fs-small">31. Does python support multiple inheritance?</h5>
            <p> Multiple inheritance means that a class can be derived from more than one parent classes. Python does support multiple inheritance, unlike Java.
            </p>

            <h5 className="text-dark fw-bold fs-small">32.What is Polymorphism in Python?</h5>
            <p>Polymorphism means the ability to take multiple forms. So, for instance, if the parent class has a method named ABC then the child class also can have a method with the same name ABC having its own parameters and variables. Python allows polymorphism.
            </p>


            <h5 className="text-dark fw-bold fs-small">33.How do you do data abstraction in Python?</h5>
            <p> Data Abstraction is providing only the required details and hiding the implementation from the world. It can be achieved in Python by using interfaces and abstract classes.</p>


            <h5 className="text-dark fw-bold fs-small">34. Define encapsulation in Python?</h5>
            <p>
              Encapsulation means binding the code and the data together. A Python class in an example of encapsulation.
            </p>



            <h5 className="text-dark fw-bold fs-small">35.Explain String methods in Python?</h5>
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

          </div >
        </div >


        <div className="three-div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJCK2FHypfNW3Oij9hVCyxQrk5h8xYJmhKQ&s" alt="java" />
          <button className="btn btn-success rounded-3 mt-4">Download PDF</button>

        </div>

      </div >
    </>
  );
}

export default Python;