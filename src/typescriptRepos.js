import { connection } from './database.js';
import fs from 'fs';

const language = "TypeScript";

const query = connection.query(`
    SELECT * 
    FROM 
        repositories
    WHERE 
        language = $1
        AND tags LIKE '% ''react'' %'
    `, [language]
);

query.then(result => {
    // const filename = "typescript-repos.json";
    // const myJSON = JSON.stringify(result.rows);

    // fs.writeFileSync(`./createdFiles/${filename}`, myJSON);

    // console.log("done");

    console.log(result.rows);
});