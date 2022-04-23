import { writeFileSync, readFileSync } from 'fs';
import yaml from "json-to-pretty-yaml";

const filename = "react-typescript-repos.yaml";

const dataJSON = readFileSync(`./createdFiles/typescript-repos.json`);
const data = JSON.parse(dataJSON);

const result = data.map((repo) => ({
    url: `https://github.com/${repo.fullName}`,
    description: repo.description,
    tags: JSON.parse(repo.tags.replace(/'/g, `"`)),
}));

const YAMLData = yaml.stringify({ repositories: result });

writeFileSync(`./createdFiles/${filename}`, YAMLData);
