#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Error running command: ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone git@github.com:JamesFincher/React_TailWinds_Boilerplate.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating new project: ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(1);

console.log(`Installing dependencies... for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(1);

console.log('Congratulations! Your new project is ready to go!');
