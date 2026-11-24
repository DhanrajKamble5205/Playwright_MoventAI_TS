/**
 * Process.env
 * it is globle module, and it is access all over the project.
 * @useCase :  set envrionment veriable.
 * @Scenario : 
 * 1. Set env variable at run time.
 * 2. To read.env file.
 * Environment variable in UPPER-CASE
 */

const process = require("process")
console.log(process.env["TARGET"]);

// Run on PowerShell use command: '$env:TARGET="DEV"; node process-env.js' This is used to set run time env.