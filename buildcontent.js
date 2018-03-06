//This is used in Jenkins. The idea is to only install packages when needed.
// Installing packages is slow and when content creators work it is annoying having to wait 4 minuttes to see a change
//This way we only reinstall dependencies if package.json or npm-shrinkwrap-json is changed.

function installPackages() {
    console.log('Not content only. Install from npm');
    const exec = require('child_process').exec;
    const child = exec('rm -rf node_modules; npm install;', function (error, stdout, stderr){
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        process.exit();
    });
}
function isContentFile(file) {
    return file != 'package.json' && file != 'bower.json' && file != 'npm-shrinkwrap.json';
}

function isContentFiles(files) {
    for (var i = 0; i < files.length; i++) {
        if (!isContentFile(files[i])) {
            return false;
        }
    }
    return true;
}

function isContentOnlyCommit(commit) {
    var added = isContentFiles(commit.added);
    var removed = isContentFiles(commit.removed);
    var modified = isContentFiles(commit.modified);
    return added && removed && modified;
}

function isContentOnlyCommits(payload) {
    //If
    if (!payload.head_commit && !payload.commits) {
        return false;
    }
    var commits = payload.commits || [];
    if (payload.head_commit) {
        commits.push(payload.head_commit);
    }
    for (var i = 0; i < commits.length; i++) {
        if (!isContentOnlyCommit(commits[i])) {
            return false;
        }
    }
    return true;
}

function testCommit(payload) {
    //if there is commits that are not content then install packages from npm
    if (!isContentOnlyCommits(payload)) {
        installPackages();
    }
    else {
        console.log('Content only. Do not reinstall packages. This makes the deployment faster');
    }
}

try {
    var payload = require('./payload');
    testCommit(payload);
} catch (ex) {
    installPackages(ex);
}
