import { connection } from './database';
import csvwriter from 'csv-writer';

let createCsvWriter = csvwriter.createObjectCsvWriter

const filename = "most-famous-repos.csv";

const csvWriter = createCsvWriter({

    // Output csv file name is geek_data
    path: filename,
    header: [

        // Title of the columns (column_names)
        { id: 'name', title: 'NAME' },
        { id: 'owner', title: 'OWNER' },
        { id: 'description', title: 'DESCRIPTION' },
        { id: 'topic', title: 'TOPIC' },
        { id: 'language', title: 'LANGUAGE' },
        { id: 'stars', title: 'STARS' },
    ]
});

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
`, [hasSponsorship]);

query.then(result => {
    csvWriter.writeRecords(result.rows).then(() => console.log("done"));
});