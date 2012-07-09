kirukku
=======

Regional programming language

*Kirukku in Tamil means “scribble”.*

Main objectives
---------------

1. Our children are very creative in scribbling on walls. Even the children playing on MS Paint are very creative. Now, the idea is to introduce them to programming using the same concept. This whole concept is based on KTurtle, which in turn was based on LOGO.

2. Build a javascript / HTML5 <canvas> based webpage that will allow children to write programs and run it and watch a turtle (or some other cute animal) draw on a canvas. The programming language, its documentation and the webpage will be released under GPL.

3. Instead of building just a programming language, the idea is to also build a web based Integrated Development Environment (IDE). It should be a full fledged IDE with possibility to step through code line by line and watch variables. The IDE is also released under GPL.

4. And finally build a portal where children can showcase their work. Children have three choices when sharing their work: a. Share only the image and not the source code. b. Share the source code copyrighted to them. c. Share the source code under GPL or CC. This portal component can be built on Drupal and it will not be GPLd. It will be close sourced. A webmaster will showcase the best works done by children on the home page.

5. Branch out and do translations for other languages. The design must allow for easy translation to other languages. So the main javascript file should load a UTF-8 resource javascript file that contains the progamming language keywords, button labels and error messages in various languages.

Plan
----

1. Release a simple version first. Only few commands (forward, turnright, turnleft, pencolor etc).

2. Parallely develop the children’s tutorial, children’s manual and also the teacher’s manual

3. Slowly introduce concepts like variables, conditional branching and loops, arithmetic and logical operators.

4. Finally introduce “code step-through” and variable watch window

5. Parallely develop various features of the portal with increasing complexity. First will be save/load your programs from the cloud. Later on sharing your programs, and finally showcasing the programs with “Like” button etc.

Future considerations
---------------------

1. There are very few non-English based programming languages. Expand to cover various languages.

2. Based on the learnings from this project, create a C/python like language. Can we translate and compile the linux kernel in a regional language? :-o

3. Write an Arduino IDE that works on regional programming languages.

4. Writing i-phone / android apps on a regional programming language.

Philosophy
----------

Computers are meant to help humans. This is best done if computers speak our language. Currently the scenario is opposite... we are learning computer’s language (which is in turn based on English). Many college level programmers do not understand the English meaning of words like “if”, “else”, “while” etc... which is why they cram programs and write them in exams. If they learnt the fundamentals of programming in their mother tongue, they would understand the concept of branching and looping better. And honestly, branching and looping is 99% of programming. No one really uses inheritance and polymorphism!

Care should be taken when choosing keywords... these words have to exist in day to day usage. If the words are rare/new words, then they will be as alien to children as the English keywords like “if”, “else”, “while” etc.

Children (for that matter, even adults) learn better when they tinker with existing code rather than try to start coding from scratch. So, lots of examples are needed. Examples should cover everything from drawing a square to solving a quadratic equation.

