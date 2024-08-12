
import "../Java/Java.css";
import { Link } from "react-router-dom";

const Java = () => {
  return (
    <>
      <div className="java d-flex flex-row flex-wrap  gap-2">

        <div className="one-div p-3 text-start">
          <h6 className="text-primary text-center fw-bold">Table of content</h6>
          <p><Link to="introduction to java">introduction to java</Link></p>
          <p><Link to="#">java interview questions for freshers</Link></p>
          <p><Link to="#">java interview questions for experienced</Link></p>
          <p><Link to="#">java Programs</Link></p>
          <p><Link to="#">java importance</Link></p>
          <p><Link to="#">introduction to java</Link></p>
          <p><Link to="#">java interview questions for freshers</Link></p>
          <p><Link to="#">java interview questions for experienced</Link></p>
          <p><Link to="#">java domains</Link></p>
          <p><Link to="#">java importance</Link></p>
          <p><Link to="#">conclusion</Link></p>

        </div>

        <div className="two-div d-flex flex-column justify-content-start">

          <h3 className="text-dark ">Top 50 Java Programming Interview Questions and Answers</h3>
          <div className="d-flex flex-row justify-content-between">
            <p className="fw-bold text-secondary"><span className="text-dark">By</span> Gangadhar</p>
            <p className="text-secondary fw-bold"><i class="fa-duotone fa-calendar-days"></i>20 june 2024</p>
          </div>

          <img className="java-img" src="https://media.licdn.com/dms/image/D4E12AQEChgD9D68iuQ/article-cover_image-shrink_720_1280/0/1715335869085?e=2147483647&v=beta&t=aRLctCIMiz7Y9FOgzxGFxd1XCsoIqMDScE-4gxlNP8Y" />



          <div>
         
            <h5 className="text-dark fw-bold fs-small mt-4">1.What is Java?</h5>
            <p>Java is a high-lеvеl, object-oriented programming language that’s widеly usеd for developing various applications,
              from mobilе apps to wеb applications.In fact, Java’s vеrsatility is one of its dеfining fеaturеs. This, furthermore,
              allows you to create applications for virtually any platform. Therefore, before diving into more intricate questions,
              make sure you have a solid grasp of this corе concеpt.  I</p>
            <h7 className="fw-bold">Java Example:</h7>
            <div className="bg-light">
              <p className="text-success">Class Sample<br />
                public static void main(string args[])  <br />
                System.out.println("Hello World!!");<br />
                <br />

              </p>
            </div>


            <h5 className="text-dark fw-bold fs-small">2.What are the top 10 features of java?</h5>
            <p>Java is one the most famous and most used language in the real world, there are many features
              in Java that makes it better than any other language some of them are mentioned below:

              <ul>
                <li><span className="text-dark">Simple:</span> Java is quite simple to understand and the syntax</li>
                <li><span className="text-dark">Platform Independent:</span> Java is platform independent means we can run the same program in any software and hardware and will get the same result.</li>
                <li><span className="text-dark">Interpreted: </span>Java is interpreted as well as a compiler-based language. </li>
                <li><span className="text-dark">Robust: </span>Features like Garbage collection, exception handling, etc that make the language robust.</li>
                <li><span className="text-dark">Secured: </span>As we can directly share an application with the user without sharing the actual program makes Java a secure language. </li>
                <li><span className="text-dark">High Performance: </span>Java is faster than other traditional interpreted programming languages.</li>
                <li><span className="text-dark">Multi-threaded: </span>It deal with multiple tasks at once by defining multiple threads</li>
                <li><span className="text-dark">Object-oriented: </span>Java is an object-oriented language that supports the concepts of class,  objects, four pillars of OOPS, etc. </li>
                <li><span className="text-dark">Dynamic: </span>It supports dynamic loading of classes and interfaces.</li>
              </ul>
            </p>

            <h5 className="text-dark fw-bold fs-small">3.What is JVM(JAVA VIRTUAL MACHINE)?</h5>
            <p>JVM stands for Java Virtual Machine it is a Java interpreter. It is responsible for loading, verifying,
              and executing the bytecode created in Java.Althoug it is platform dependent which means the software of JVM
              is different for different Operating Systems it plays a vital role in making Java platform Independent.
              <br />
              JVM(Java Virtual Machine) acts as a run-time engine to run Java applications. JVM is the one that actually calls
              the main method present in a Java code. JVM is a part of JRE(Java Runtime Environment).
              <br />
              Java applications are called WORA (Write Once Run Anywhere). This means a programmer can develop Java code on one
              system and can expect it to run on any other Java-enabled system without any adjustment. This is all possible because of JVM.

            </p>

            <h5 className="text-dark fw-bold fs-small">4.What is JIT(JUST INTIME COMPILER)?</h5>
            <p>JIT stands for (Just-in-Time) compiler is a part of JRE(Java Runtime Environment), it is used for better performance of the Java applications
              during run-time.
              <ol>
                <li>Source code is compiled with javac compiler to form bytecode</li>
                <li>Bytecode is further passed on to JVM </li>
                <li>JIT is a part of JVM, JIT is responsible for compiling bytecode into native machine code at run time.</li>
                <li>The JIT compiler is enabled throughout, while it gets activated when a method is invoked. For a compiled method,
                  the JVM directly calls the compiled code, instead of interpreting it.</li>
                <li>As JVM calls the compiled code that increases the performance and speed of the execution.</li>
              </ol>
            </p>

            <h5 className="text-dark fw-bold fs-small">5.Difference between JVM, JRE, and JDK?</h5>
            <p><span className="text-dark">JDK:</span> JDK stands for Java Development Kit which provides the environment to develop and execute Java programs. JDK is a package that includes two things Development Tools to provide
              an environment to develop your Java programs and, JRE to execute Java programs or applications.</p>
            <p><span className="text-dark">JRE:</span>JRE stands for Java Runtime Environment, it is an installation package that provides an environment to run the Java program or application on any machine.</p>
            <p><span className="text-dark">JVM:</span>JVM also known as Java Virtual Machine is a part of JRE. JVM is a type of interpreter responsible for converting bytecode into machine-readable code. JVM itself is platform dependent
              but it interprets the bytecode which is the platform-independent reason why Java is platform-independent</p>

            <h5 className="text-dark fw-bold fs-small">6.Explain public static void main(String args[]) in Java?</h5>
            <p><span className="text-dark">public:</span>the public is the access modifier responsible for mentioning who can access the element or the method and what is the limit.  It is responsible for making the main function globally available. It is made public so that
              JVM can invoke it from outside the class as it is not present in the current class.</p>
            <p><span className="text-dark">static:</span> static is a keyword used so that we can use the element without initiating the class so to avoid the unnecessary allocation of the memory. </p>
            <p><span className="text-dark">void:</span>void is a keyword and is used to specify that a method doesn’t return anything. As the main function doesn’t return anything we use void.</p>
            <p><span className="text-dark">main:</span>main represents that the function declared is the main function. It helps JVM to identify that the declared function is the main function.</p>
            <p><span className="text-dark">String[args]:</span>String args[]: It stores Java command-line arguments and is an array of type java.lang.String class.</p>



            <h5 className="text-dark fw-bold fs-small">8.What is Java String Pool??</h5>
            <p>A Java String Pool is a place in heap memory where all the strings defined in the program are stored.
              A separate place in a stack is there where the variable storing the string is stored. Whenever we create a new string object, JVM checks for the presence of the object in the String pool, If String is available in the pool,
              the same object reference is shared with the variable, else a new object is created.</p>


            <h5 className="text-dark fw-bold fs-small">9.What is the Wrapper class in Java?</h5>
            <p>Java is a high-lеvеl, object-oriented programming language that’s widеly usеd for developing various applications,
              from mobilе apps to wеb applications.In fact, Java’s vеrsatility is one of its dеfining fеaturеs. This, furthermore,
              allows you to create applications for virtually any platform. Therefore, before diving into more intricate questions,
              make sure you have a solid grasp of this corе concеpt.  I</p>

            <h5 className="text-dark fw-bold fs-small">10.What are packages in Java?</h5>
            <p>Packages in Java can be defined as the grouping of related types of classes, interfaces, etc providing access to protection and namespace management.
              <br />Packages are used in Java in order to prevent naming conflicts, control access, and make searching/locating and usage of classes, interfaces, etc easier.</p>
            <p>1.Packages avoid name clashes.
              <br />
              2.The Package provides easier access control.
              <br />
              We can also have the hidden classes that are not visible outside and are used by the package</p>




            <h5 className="text-dark fw-bold fs-small">11.What are different data types in java?</h5>
            <p>There are 2 types of data types in Java as mentioned below:
              <br />
              1.Primitive Data Type
              <br />
              2.Non-Primitive Data Type or Object Data type
              <br />
              <span className="text-dark">Primitive Data Type: </span>Primitive data are single values with no special capabilities.
              There are 8 primitive data types:
              <ol>
                <li><span className="text-dark">boolean: </span>stores value true or false</li>
                <li><span className="text-dark">bytes: </span>stores an 8-bit signed two’s complement integer</li>
                <li><span className="text-dark">char: </span>stores a single 16-bit Unicode character</li>
                <li><span className="text-dark">boolean: </span>short: stores a 16-bit signed two’s complement integer</li>
                <li><span className="text-dark">int: </span>stores a 32-bit signed two’s complement integer</li>
                <li><span className="text-dark">long:</span> stores a 64-bit two’s complement integer</li>
                <li><span className="text-dark">float:</span> stores a single-precision 32-bit IEEE 754 floating-point</li>
                <li><span className="text-dark">double: </span>stores a double-precision 64-bit IEEE 754 floating-point</li>
              </ol>
              <br />
              <span className="text-dark">Non-Primitive Data Type: </span>Reference Data types will contain a memory address of the variable’s
              values because it is not able to directly
              store the values in the memory. Types of Non-Primitive are mentioned below:
              <ul className="text-dark">
                <li>Strings</li>
                <li>Arrays</li>
                <li>Class</li>
                <li>Object</li>
                <li>Interface</li>
              </ul>
            </p>


            <h5 className="text-dark fw-bold fs-small">12.Differentiate between instance and local variables?</h5>
            <p><span className="text-dark">Instance Variable:</span>1.Declared outside the method, directly invoked by the method.
              <br />2.It can be used throughout the class.<br />3.hjbfbjgj hjeghjfghghj jhjfshhj<br />
              <span className="text-dark">Global Variable:</span>1.Declared within the method. <br />
              2.The scope is limited to the method.<br />3. bvfbnvbnvsf hhjfgshhbsf jbfhsdhj</p>


            <h5 className="text-dark fw-bold fs-small">13.What are the principle concepts of OOPS?</h5>
            <p>There are four principle concepts upon which object-oriented design and programming rest. They are:
              <ul className="text-dark"><li>Encapsulation</li>
                <li>Abstraction</li>
                <li>Polymorphism</li>
                <li>Inheritance</li>
              </ul></p>


            <h5 className="text-dark fw-bold fs-small">14.What is OOPS?</h5>
            <p>Object means a real-world entity such as a pen, chair, table, computer, watch, etc.
              Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects.
              It simplifies software development and maintenance by providing some concepts:They are
              <br />
              1.Object 2.Class 3.Encapsulation 4.Abstraction 5.Polymorphism 6.Inheritance
            </p>



            <h5 className="text-dark fw-bold fs-small">15.What is an object in Java?</h5>
            <p>An entity that has state and behavior is known as an object e.g., chair, bike,
              marker, pen, table, car, etc. It can be physical.A class is a template or blueprint
              from which objects are created.So, an object is the instance(result) of a class.
              <ul>
                <li><span className="text-dark">State: </span>represents the data (value) of an object.</li>
                <li><span className="text-dark">Behaviour:</span>represents the behavior (functionality) of an object such as deposit, withdraw, etc.</li>
              </ul>
            </p>


            <h5 className="text-dark fw-bold fs-small">16.What is Class?</h5>
            <p>A class is a group of objects which have common properties. It is a template or blueprint from which objects are created.
              It is a logical entity.A class contain:<br />
              1.Fields 2.Methods 3.Blocks 4.Constructors
            </p>
            <h5>Object and Class Example:</h5>
            <p className="text-success bg-light">class Student<br />int id<br />String name<br /> public static void main(String args[])<br />
              Student s1=new Student()<br /> System.out.println(s1.id)<br />  System.out.println(s1.name)
            </p>
            <p>Initiallization of object can be done by 3 ways:
              1.By Referrencing <br /> 2.By method <br /> 3.By constructor</p>



            <h5 className="text-dark fw-bold fs-small">17.What is Encapsulation?</h5>
            <p>Encapsulation is a technique used for hiding the properties and behaviors of an object and allowing outside access only as appropriate. It prevents other objects from directly altering or accessing the properties or methods of the encapsulated object.
              Encapsulation in Java is a process of wrapping code and data together into a single unit,
              for example, a capsule with a medicine in it.We can create a fully encapsulated class in Java by making all the data members of the class private.
              Now we can use setter and getter methods to set and get the data in it.
            </p>
            <p className="text-success bg-light">class Student<br />int id<br />private String name<br /> public string getName()<br /> return name<br />
              public void setName(String name) <br />this.name=name</p>

            <p className="text-success bg-light">class Test<br />public static void main(String[] args)<br />Student s=new Student();
              <br />s.setName("vijay");   <br />System.out.println(s.getName());  </p>



            <h5 className="text-dark fw-bold fs-small">18.What are Access Modifiers?</h5>
            <p>Encapsulation can be achieved in java by Access Modifiers.<br />
              The access modifiers in Java specifies the accessibility or scope of a field, method, constructor, or class. We can change the access level of fields, constructors, methods,
              and class by applying the access modifier on it<br />
              There are four types of Java access modifiers:<br />
              <ol>
                <li><span className="text-dark">Default:</span>The access level of a default modifier is only within the package. It cannot be accessed from outside the package. If you do not specify any access level, it will be the default.</li>
                <li><span className="text-dark">Private:</span>The access level of a private modifier is only within the class. It cannot be accessed from outside the class.</li>
                <li><span className="text-dark">Protected:</span>The access level of a protected modifier is within the package and outside the package through child class. If you do not make the child class, it cannot be accessed from outside the package.</li>
                <li><span className="text-dark">Public:</span>The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class, within the package and outside the package.</li>
              </ol>
            </p>


            <h5 className="text-dark fw-bold fs-small">19.What is Abstraction?</h5>
            <p>Abstraction is a process of hiding the implementation details and showing only functionality to the user.
              Another way, it shows only essential things to the user and hides the internal details.A class which is declared
              with the abstract keyword is known as an abstract class in Java. It can have abstract and non-abstract methods (method with the body).
              <ul>
                <li>An abstract class must be declared with an abstract keyword.</li>
                <li>It can have abstract and non-abstract methods.</li>
                <li>It cannot be instantiated.</li>
                <li>It can have constructors and static methods also.</li>
                <li>It can have final methods which will force the subclass not to change the body of the method.
                </li>
              </ul>
            </p>

            <h5 className="text-dark fw-bold fs-small">20.What is an Interface?</h5>
            <p>Abstraction can be achieved in java by Interface concepts.<br />
              There can be only abstract methods in the Java interface, not method body.
              It is used to achieve abstraction and multiple inheritance in Java.
              <br />
              An interface is declared by using the interface keyword. It provides total abstraction;
              means all the methods in an interface are declared with the empty body, and all the fields are public,
              static and final by default. A class that implements an interface must implement all the methods declared
              in the interface.
            </p>
            <h5 className="text-dark">Interface Example</h5>
            <p className="text-success bg-light">interface Drawable<br />
              void draw()<br />class Rectangle implements Drawable<br />public void draw()<br />System.out.println("drawing rectangle")<br />class Circle implements Drawable<br />
              public void draw()<br />System.out.println("drawing circle")<br />  class TestInterface1<br />
              public static void main(String args[])<br />Drawable d=new Circle()<br />d.draw()
            </p>



            <h5 className="text-dark fw-bold fs-small">21.What is Inheritance?</h5>
            <p>Inheritance in Java is a mechanism in which one object acquires all the properties and behaviors of a parent object.
              It is an important part of OOPs.The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class.
              Moreover, you can add new methods and fields in your current class also.
              <ul>
                <li><span className="text-dark">Super Class:</span>Superclass is the class from where a subclass inherits the features. It is also called a base class or a parent class.</li>
                <li><span className="text-dark">Sub Class:</span>Subclass is a class which inherits the other class. It is also called a derived class, extended class, or child class.</li>
              </ul>
              The <span className="text-dark">extends</span> keyword indicates that you are making a new class that derives from an existing class. The meaning of "extends" is to increase the functionality.
            </p>
            <h5>Inheritance Exmaple:</h5>
            <p className="bg-light text-success">class Employee<br /> float salary=40000<br />class Programmer extends Employee<br /> int bonus=10000<br />
              public static void main(String args[])<br />   Programmer p=new Programmer()<br />   System.out.println("Programmer salary is:"+p.salary)<br />
              System.out.println("Bonus of Programmer is:"+p.bonus);

            </p>



            <h5 className="text-dark fw-bold fs-small">21.What is Polymorphism?</h5>
            <p>
              Polymorphism in Java is a concept by which we can perform a single action in different ways.
              There are two types of polymorphism in Java: compile-time polymorphism and runtime polymorphism.
              We can perform polymorphism in java by method overloading and method overriding.
              The word "poly" means many and "morphs" means forms. So polymorphism means many forms.
              In some cases, multiple methods have the same name, but different formal argument lists (overloaded methods).
              In other cases, multiple methods have the same name,
              same return type, and the same formal argument list (overridden methods).
            </p>
            <p>Polymorphism can be achieved in 2 ways: They are <br />
              1.Runtime Polymorphism or Method Overriding
              1.Compile-time Polymorphism or Method overloading
            </p>


            <h5 className="text-dark fw-bold fs-small">21.What is Method Overloading?</h5>
            <p>
              If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.
              Method overloading increases the readability of the program.There are 2 ways to overload method:They are <br />
              1.By changing number of arguments<br />
              2.By changing data types<br />
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              class Adder<br />static int add(int a,int b)<br />return a+b;<br />static int add(int a,int b,int c)<br />return a+b+c;<br />
              class TestOverloading1<br />public static void main(String[] args)<br />System.out.println(Adder.add(11,11))<br />
              System.out.println(Adder.add(11,11,11));
            </p>


            <h5 className="text-dark fw-bold fs-small">22.What is Method Overrding?</h5>
            <p>
              If subclass (child class) has the same method as declared in the parent class,
              it is known as method overriding in Java.Method overriding is used to provide the specific implementation of a method which is already provided by its superclass.
              Method overriding is used for runtime polymorphism.Rules to override method:They are <br />
              1.The method must have the same name as in the parent class
              <br />
              2.The method must have the same parameter as in the parent class.
              <br />
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              class vehicle<br />void run()<br />System.out.println("Vehicle is running");<br />class Bike extends Vehicle<br />  public static void main(String args[])<br />
              Bike obj = new Bike();<br />obj.run();
            </p>


            <h5 className="text-dark fw-bold fs-small">23.What is SUPER Keyword?</h5>
            <p>
              The super keyword in Java is a reference variable which is used to refer immediate parent class object.
              We can use super keyword to access the data member or field of parent class. It is used if parent class and child class have same fields.
              Uses of super keyword:<br />
              1.super can be used to refer immediate parent class instance variable.
              <br />
              2.super can be used to invoke immediate parent class method.
              <br />
              3.super() can be used to invoke immediate parent class constructor.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              class Animal<br />String color="white";<br />class Dog extends Animal<br />String color="black";<br />void printColor()<br />System.out.println(color)<br />
              System.out.println(super.color);<br />class Test<br />public static void main(String args[])<br />Dog d=new Dog();  <br />
              d.printColor();

            </p>


            <h5 className="text-dark fw-bold fs-small">24.What is THIS Keyword?</h5>
            <p>There can be a lot of usage of Java this keyword. In Java, this is a reference variable that refers to the current object.
              Uses of this keyword:<br />
              1.this can be used to refer current class instance variable.
              <br />
              2.this can be used to invoke current class method (implicitly)
              <br />
              3.this() can be used to invoke current class constructor.
              <br />
              4.this can be passed as an argument in the method call.
            </p>
            <p className="text-dark">Example:</p>
            <p className="text-success bg-light">
              class Student<br />int roll;<br />String name;<br />float fees;<br />Student(int rollno,String name,float fee)<br />this.rollno=rollno;  <br />this.name=name;
              <br />this.fee=fee;  <br />System.out.println(rollno+" "+name+" "+fee);<br />class Test2<br />public static void main(String args[])<br />Student s1=new Student(111,"ankit",5000f);
              <br />s1.display();
            </p>


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
              <span className="text-dark">1.Char at():</span>The Java String class charAt() method returns a char value at the given index number.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>public char charAt(int index)</p>
              <span className="text-dark">2.concat():</span>The Java String class concat() method combines specified string at the end of this string. It returns a combined string. It is like appending another string..<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>public String concat(String anotherString)    </p>
              <span className="text-dark">3.contains():</span>The Java String class contains() method searches the sequence of characters in this string. It returns true if the sequence of char values is found in this string otherwise returns false.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>public boolean contains(CharSequence sequence)    </p>
              <span className="text-dark">4.equals():</span>The Java String class equals() method compares the two given strings based on the content of the string. If any character is not matched, it returns false. If all characters are matched, it returns true.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>publicboolean equals(Object anotherObject)  </p>
              <span className="text-dark">5.endsWith():</span>The Java String class endsWith() method checks if this string ends with a given suffix. It returns true if this string ends with the given suffix; else returns false.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>public boolean endsWith(String suffix)</p>
              <span className="text-dark">6.join():</span>The Java String class join() method returns a string joined with a given delimiter. <br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>String joinString1=String.join("-","Hello","World!"); </p>
              <span className="text-dark">7.length():</span>The Java String class length() method finds the length of a string. <br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public int length() </p>
              <span className="text-dark">8.replace():</span>The Java String class replace() method returns a string replacing all the old char or CharSequence to new char or CharSequence.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>String replaceString=s1.replace('a','e');</p>
              <span className="text-dark">9.replaceAll():</span>The Java String class replaceAll() method returns a string replacing all the sequence of characters matching regex and replacement string.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>public String replaceAll(String regex, String replacement)  </p>
              <span className="text-dark">10.split():</span>The java string split() method splits this string against given regular expression and returns a char array.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>String[] words=s1.split("\\s");</p>
              <span className="text-dark">11.substring():</span>The Java String class substring() method returns a part of the string.We pass beginIndex and endIndex number position in the Java substring method.<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>System.out.println(s1.substring(2,4));</p>
              <span className="text-dark">12.toCharArray():</span>The java string toCharArray() method converts this string into character array. It returns a newly created character array,<br /><p className="text-success bg-light"><span className="text-dark">Syntax:</span>public char[] toCharArray()  </p>
              <span className="text-dark">13.toLowerCase():</span>The java string toLowerCase() method returns the string in lowercase letter<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String toLowerCase()  </p>
              <span className="text-dark">14.toUpperCase():</span>The java string toUpperCase() method returns the string in lowercase letter<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String toUpperCase()  </p>
              <span className="text-dark">15.trim():</span>The Java String class trim() method eliminates leading and trailing spaces.<br /><p className="text-success bg-light"><span className="text-dark">Syntax</span>public String trim()    </p>
            </p>
          </div>
        </div>


        <div className="three-div">
          <img src="https://softteco.com/wp-content/uploads/2016/06/Fernflower-Java-Decompiler-min-1.png" alt="java" />
          <button className="btn btn-success rounded-3 mt-2">Download PDF</button>

        </div>

      </div>
    </>
  );
}

export default Java;