# ReactJS First Application
This read note is for first time npm installation

# Step 1
Created a new folder with name "react-firstapp"

# Step 2
npm command to initialize this new app <br><br>
<strong>npm init</strong>

# Step 3
Npm command to install react dependencies and save it in package.json file  <br><br>
<strong>npm install react react-dom react-jsx --save</strong>

# Step 4
Npm command to install react Dev Dependencies and save in package.json file. <br><br>
<strong>npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 webpack webpack-dev-server --save-dev</strong>

# Step 5
Inside the root application directory, manually create below files and folders 
-	react-firstapp/webpack.config.js (file)
-	react-firstapp/src (Folder)
-	react-firstapp/src/index.html (file)
-	react-firstapp/src/app (Folder)
-	react-firstapp/src/app/index.js (file)

# Step 6
Take the reference and update webpack.config.js

# Step 7
For package.json, update the auto generated scripts notation with below <br><br>
<strong>
"scripts": { <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "start": "npm run build",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "build": "webpack -d && xcopy \"src/index.html\" \"dist/\" /F /Y && webpack-dev-server --content-base src/ --inline", <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "build:prod": "webpack -p && xcopy \"src/index.html\" \"dist/\" /F /Y"<br>
}
</strong>
