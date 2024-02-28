const fs = require('fs-extra');

fs.ensureDirSync('newFolder1');
fs.ensureFileSync('newFolder1/file.txt');
fs.ensureDirSync('newFolder2');
fs.moveSync('newFolder1/file.txt', 'newFolder2/file.txt');
fs.ensureDirSync('newFolder3');
fs.copySync('newFolder2/file.txt', 'newFolder3/file.txt');
fs.removeSync('newFolder2/file.txt');
fs.removeSync('newFolder3/file.txt');
fs.removeSync('newFolder1');
fs.removeSync('newFolder2');
fs.removeSync('newFolder3');