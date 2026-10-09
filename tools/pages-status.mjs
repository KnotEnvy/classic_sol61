import {appendFile} from 'node:fs/promises';
const repo=process.env.GITHUB_REPOSITORY;
if(!repo||!process.env.GITHUB_TOKEN)throw Error('Missing Actions repository/token environment');
const response=await fetch(`https://api.github.com/repos/${repo}/pages`,{headers:{Accept:'application/vnd.github+json',Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,'X-GitHub-Api-Version':'2022-11-28'}});
if(!response.ok&&response.status!==404)throw Error('Cannot read Pages configuration: HTTP'+response.status);
const ready=response.ok&&(await response.json()).build_type==='workflow';
await appendFile(process.env.GITHUB_OUTPUT,`ready=${ready}\n`);
console.log(ready?'Pages uses GitHub Actions; deployment enabled.':'Build passed. Select Settings > Pages > Source > GitHub Actions, then run this workflow again.');
