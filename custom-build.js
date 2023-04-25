// custom-build.js
const ts = require('typescript');
const fs = require('fs-extra');
const path = require('path');

const tsConfigPath = './tsconfig.json';
const tsConfig = require(tsConfigPath);
const outDir = tsConfig.compilerOptions.outDir || './dist';

const build = async () => {
    const program = ts.createProgram([tsConfigPath]);
    const emitResult = program.emit(undefined, (filePath, data) => {
        if (path.extname(filePath) === '.js') {
            const tsFilePath = filePath.replace(/\.js$/, '.ts');
            if (fs.existsSync(tsFilePath)) {
                const tsStats = fs.statSync(tsFilePath);
                const jsStats = fs.statSync(filePath);
                if (tsStats.mtime < jsStats.mtime) {
                    return;
                }
            }
        }
        fs.outputFileSync(filePath, data);
    });

    const diagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
    const formattedDiagnostics = ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCanonicalFileName: fileName => fileName,
        getCurrentDirectory: ts.sys.getCurrentDirectory,
        getNewLine: () => ts.sys.newLine,
    });

    if (emitResult.emitSkipped) {
        console.error('TypeScript build failed:');
        console.error(formattedDiagnostics);
        process.exit(1);
    } else {
        console.log('TypeScript build succeeded.');
    }
};

build();
