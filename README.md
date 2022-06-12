
# Notes Frontend & Backend 

Vi bygger ett dokumenthanteringssystem med en relationsdatabas!

Bakgrund:

Du har fått en kund som vill bygga ett eget system för att skapa digitala dokument och önskar att se en demo på detta.
Kunden vill kunna logga in på sitt system, där se en lista på alla skapade dokument, kunna skapa nya och redigera de som redan finns där. 


När kunden tittar på ett skapat dokument så skall det finnas möjlighet att se dokumentet både “live” dvs utan redigeringsläget samt att se dokumentet i redigeringsläge.

Frontend (HTML, JavaScript ,CSS)
Backend (Node.js, Express.js)
Databas (MySQL)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=flat)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white&style=flat)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=flat)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=flat)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=flat)
## Hur den är uppbyggd

Jag har fyra olika HTML sidor:

index.html (vilket är den man börjar på och man är tvungen att logga in sig om inloggningen lyckas kan man välja att gå till de andra sidorna)

createDocs.html (Vilken är den sidan som man skapar dokumentet även uppdatera om det är så att man vill ändra något direkt)

showAllDocs.html (Är den sidan som visar alla dokument om det finns några här kan man uppdatera eller radera dokumenten (soft delete))

inspect.html (Kan man kolla på sitt dokument och skriva ut ifall man vill)

Det jag gör för att låta användaren var inneloggad är med hjälp av localstorage.

Om inlogginngsuppgifter stämmer så sätts localstorage och den kollas direkt varje gång man besöker en ny sida.

Om det skulle vara så att användare inte har rätt att vara på sidan eller utloggad och besöker en sidan skickas man tillbaka till startsidan och är tvungen att logga in på nytt.

----

Mina routes:

 ### docs.js
Här skapar jag dokumenten även hantera en av de två uppdatering möjligheterna man har. 

Att om man har skapat dokumentet och skickat det all typ av ändring efter blir en uppdatering.

Det man får skickat är heading (rubrik) & content (innehållet). Om det lyckas så får man tillbaka senaste uppdaterings tiden & ett meddelande att det lyckades.

Har även tagit in och hantera felhantering.

 ### showAllDocs.js
Visar alla dokument. Visar även när dokumentet skapades och senaste gången den är ändrad.

Man kan också uppdatera dokument härifrån och även radera (soft delete) om man vill.

Visar även de raderade dokumenten. 

---
# MySQL
| # | Name         | Type         | Collation         | Attributes | Null | Default | Comments | Extra          |
|---|--------------|--------------|-------------------|------------|------|---------|----------|----------------|
| 1 | id           | int          |                   |            | No   | None    |          | AUTO_INCREMENT |
| 2 | heading      | varchar(128) | latin1_swedish_ci |            | No   | None    |          |                |
| 3 | content      | longtext     | latin1_swedish_ci |            | Yes  | NULL    |          |                |
| 4 | created      | text         | latin1_swedish_ci |            | Yes  | NULL    |          |                |
| 5 | last_changed | text         | latin1_swedish_ci |            | Yes  | NULL    |          |                |
| 6 | deleted      | tinyiny      |                   |            | Yes  | NULL    |          |                |

ID vill jag AUTO_INCREMENT på så jag kan få ett unik sådant.

Heading räcker det med 128 bit för ingen kommer skriva en sån lång rubrik.

created & last_changed använde jag text istället för date timestamp för jag hantera tiderna och det i koden och med hjälp av text kan jag hantera alla typer av datumlikande typer.

Sista är till för en soft delete istället för att ta bort hela så har jag en boolean som jag sätter till true ifall de har tagit bort den.

Men man kommer ändå kunna se den i översiktet av alla dokument.

---
# Starta projektet:

npm install

Backend: npm start (annars nodemon start ifall ni har detta)

Frontend: öppna index.html i localhost (live server) genom att högerklicka på filen

## NPM PAKET

  ## mysql2
 MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more
   https://www.npmjs.com/package/mysql2
```
 npm install --save mysql2
 
 // get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});
 ```
 

## Nodemon
"nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected."
Läs mer om denna här: https://www.npmjs.com/package/nodemon
 ```
 npm install --save-dev nodemon 

 nodemon [your node app]
 ```
## bcrypt 

"A library to help you hash passwords." Läs mer om denna här: https://www.npmjs.com/package/bcrypt
```
npm install bcrypt


```
## colors 

"Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology."
Läs mer om denna här: https://www.npmjs.com/package/dotenv
```
npm install colors

```

 ## Cors
 CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 Läs mer om denna här: https://www.npmjs.com/package/cors
 ```
 npm install cors

 app.use(cors())
  ```
 ## gh-pages
```
 Körde frontend delen via Github pages. 
 Läs mer om det här: https://pages.github.com/
 ```
## Deployment 

För att starta (om  man har installerat nodemon)

```bash
  nodemon start
```


## Demo 💾


Backend repo : https://github.com/wahlstrommm/Notes-back

Frontend repo: https://github.com/wahlstrommm/Notes-front

Repot som innehåller båda + databasen: https://github.com/wahlstrommm/Notes



Inlogg Admin: Username: admin Password: admin

Databasen: 

  host: 'localhost'

  port: '8889'

  user: 'notes_admin'
  
  password: 'notes_admin'
  
  database: 'notes'
  

## Gjord av 👨‍🏭

- [@Wahlstrommm](https://github.com/wahlstrommm)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://wahlstrommm.github.io/magnus/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/magnus-vahlstrom/)


## 🛠 Skills
Det jag har använt mig av för att lösa uppgiften!

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
