# Bullshit Generator
---
Bullshit Generator web app project for Alpha Camp Semester 3

![Demo](/Demo.png)

## Getting Started
---
This mini web project is a single-page web app for generating random teasing bullshit that targets on different job positions in a startup tech company.[<sup>1</sup>](#1)

This project is established on the following packages:

+ **[Node.js](https://nodejs.org/en/)**: For creating a local server and a script designing server actions
+ **[Express](https://expressjs.com/)**: For setting up routing rules for directing users to specific webpages
+ **[Handlebars](https://www.npmjs.com/package/express-handlebars)**: For creating reusable webpage templates
+ **[body-parser](https://www.npmjs.com/package/body-parser)**: For analyzing data contained in request packets
+ **[nodemon](https://www.npmjs.com/package/nodemon)**: For auto-launching the local server when its server scripts are updated.

## Installing
---
To run this project, take the steps using the console:

1. Download this project from GitHub:
```
git clone https://github.com/zongronghuang/bullshit_generator.git
``` 
You can also download it as a .zip file:
**[https://github.com/zongronghuang/bullshit_generator](https://github.com/zongronghuang/bullshit_generator)**

2. Go to the **bullshit_generator** folder.

3. Install Express using the console:
```
npm install express
```

4. Install Handlebars
```
npm -i express-handlebars
```

5. Install body-parser
```
npm -i body-parser
```

6. Install nodemon
```
npm -i nodemon
```

7. Launch the local server:
```
nodemon app.js
```

8. Open a web browser and enter the URL:
```
localhost:3000
```

9. Now the web app is ready for use.

## How to Use
---
1. Find three job titles: **工程師** (engineer), **設計師** (designer), and **創業家** (entrepreneur). 

2. Select a desired job title.

3. Click **產生幹話** (generate bullshit) to generate a random bullshit expression that targets on the selected job title.

4. Check the generated expression in the text area.


---
<a class="anchor" id="1">1</a>: The project and the used material are only for educational purpose, with no intention of copyright infringement or deliberate defamation or mockery.