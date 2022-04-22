import { connection } from './database.js';
import fs from 'fs';

const hasSponsorship = true;

const query = connection.query(`
    SELECT 
        name,
        owner,
        description,
        topic,
        language,
        stars
    FROM 
        repositories
    WHERE
        "hasSponsorship" = $1
    ORDER BY
        stars DESC
    `, [hasSponsorship]
);

query.then(result => {
    const filename = "sponsored-repos.json";
    const myJSON = JSON.stringify(result.rows);

    fs.writeFileSync(`./createdFiles/${filename}`, myJSON);

    console.log("done");
});