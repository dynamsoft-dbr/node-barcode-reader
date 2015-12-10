Node.js Barcode Reader
=======================================================================

The samples demonstrate how to implement nodejs barcode extension with DBR ([Dynamsoft Barcode SDK][1]) on Windows, as well as how to create a simple RESTful service for HTML5 Webcam barcode reader with [restify][2].

Downloads for Node Barcode Extension
-----------------------
* [Dynamsoft Barcode Reader SDK][3]
* ```npm install -g node-gyp```

Get Started
-----------
1. Run ```node-gyp configure install``` to generate **build** folder.
2. Import the project to Visual Studio. And then correctly configure directories of DBR header files and libraries. In addition, add the custom build event: ```copy "{installation directory}\Dynamsoft\Barcode Reader 2.0 Trial\Redist\C_C++\*.dll" "$(OutDir)"```
3. Build the project to generate **dbr.node**.
4. Run **dbr.js** with the following command.
```cmd
> node dbr.js
```
![node barcode extension](http://www.codepool.biz/wp-content/uploads/2015/05/node_barcode.png)

How to Create a Web Barcode Reader with Node Barcode Extension
---------------------------------------------------------------
1. Make sure you have a Webcam connected to your PC.
2. Install **restify** to build a simple REST web services:

    ```
    npm install
    ```
3. Run **server.js**:
4. Visit ** http://< ip >:< port >** to scan barcode with Webcam.
![webcam barcode reader](http://www.codepool.biz/wp-content/uploads/2015/12/node_dbr.png)

Blog
-----
[Making Dynamsoft Barcode SDK an Addon for Node.js][4]

[1]:http://www.dynamsoft.com/Products/Dynamic-Barcode-Reader.aspx
[2]:http://restify.com/
[3]:http://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx
[4]:http://www.codepool.biz/making-barcode-addon-for-nodejs.html
