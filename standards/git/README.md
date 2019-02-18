# Git

## Introduction

For those unfamiliar with Git, try reading [the Git Parable](http://tom.preston-werner.com/2009/05/19/the-git-parable.html).

Working with multiple developers on the same project can be frustrating. Trying to push to a repository's `master` branch only to find that someone has pushed before you can lead to unnecessary conflicts, duplicated work, bad code, and, worst of all, wasted time.

AppDev's policy for software projects is to make a branch for each feature or non-critical bugfix that a developer works on. This makes sure that different work is separated from each other, and when time comes to merge, a quick pull request ensures that other developers can do a brief code review before it is merged.

Continue on and read our Development Workflow!

## Development Workflow

### Workflow

1. Get assigned issue on Github
2. `git checkout -b [your-name]/[feature]` \(Create feature branch\)
3. Work on feature
4. Open Pull Request
5. Respond to Pull Request feedback
6. Merge
7. Close PR and delete branch
8. Close relevant issue and link PR number in comment

### Making a commit

Try to keep the amount of code in each commit in the "goldilocks region" of length: not too short and not too long. Each commit should have enough code to be meaningful yet concise enough to still be readable.

Commit messages should be **concise** and in **sentence case**. E.g.:

> c2a47e: Add tap gesture recognizer to EateryCollectionViewCell

### Pre-Pull Request

Once your feature or bugfix is ready, use `rebase` to do whatever you please to make the history most understandable and clear:

* Squash commits together
* Amend commit messages
* Force push changes to your branch \(the only time force push is okay\)

### Pull Request

Some standardization rules:

* Set the title of the PR to your feature name
  * Ex: If your branch is called `Monica/Feature` then your PR title should be `Feature`
* In the PR description, write the issue \# and hyperlink that with the issue link
  * Note: Github should automatically fill in the issue number if you type in "\#" in the description

### Post-Pull Request

* Commit and push to your branch to address feedback from code review
* Squash commits

### Merging

```bash
git checkout master
git pull
git checkout [your-name]/[feature]
git merge master # merges master into your branch
git push
```

### Escape Hatches

* `git rebase --abort` while rebasing

