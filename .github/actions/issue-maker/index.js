const core = require("@actions/core")
const github = require("@actions/github")
const octokit = require("@")

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");

        const octokit = github.getOctokit(token);

        const newIssue = await octokit.context.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokeBody
        });

    } catch (err) {
        core.setFailed(err);
    }
}

run();