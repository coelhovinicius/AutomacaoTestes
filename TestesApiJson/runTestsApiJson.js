const { exec } = require('child_process');
const path = require('path');

const cypressPath = path.join(__dirname, 'node_modules', '.bin', 'cypress');

exec(`${cypressPath} run`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Erro: ${err}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
