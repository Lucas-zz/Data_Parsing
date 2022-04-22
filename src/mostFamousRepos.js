import csvwriter from 'csv-writer';
import { readFileSync } from 'fs';

let createCsvWriter = csvwriter.createObjectCsvWriter

const filename = "most-famous-repos.csv";

const csvWriter = createCsvWriter({

    // Output csv file name is geek_data
    path: `./createdFiles/${filename}`,
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

const dataJSON = readFileSync(`./createdFiles/sponsored-repos.json`);
const data = JSON.parse(dataJSON);

csvWriter.writeRecords(data).then(() => console.log("done"));