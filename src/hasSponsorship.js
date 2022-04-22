import pg from 'pg';
import fs from 'fs';

const { Pool } = pg;

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'parsing',
    password: 'lucas'
});

const hasSponsorship = true;

const query = connection.query('SELECT * FROM repositories WHERE "hasSponsorship"=$1', [hasSponsorship]);

query.then(result => {
    const filename = "sponsored-repos.json";
    const myJSON = JSON.stringify(result.rows);

    fs.writeFileSync(filename, myJSON);

    console.log("done");
});