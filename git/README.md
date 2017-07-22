# Git

## Introduction

For those unfamiliar with Git, try reading [the Git Parable](http://tom.preston-werner.com/2009/05/19/the-git-parable.html).

Working with multiple developers on the same project can be frustrating. Trying  
to push to a repository's `master` branch only to find that someone has pushed  
before you can lead to unnecessary conflicts, duplicated work, bad code, and,  
worst of all, wasted time.

AppDev's policy for software projects is to make a branch for each feature or  
non-critical bugfix that a developer works on. This makes sure that different  
work is separated from each other, and when time comes to merge, a quick pull  
request ensures that other developers can do a brief code review before it is  
merged.

Continue on and read our Development Workflow!

## Development Workflow

### Pre-Pull Request

Use `rebase` to do whatever you please to make the history most understandable  
and clear:

* Update with contents of master
* Squash commits together
* Separate single commits into multiple ones
* Reorder commits
* Remove commits
* Alter commit messages
* Force push changes to your branch \(the only time force push is okay\)

### Post-Pull Request

* Treat open PR as amend-only, rebasing and force pushing will mutate/destroy
  commentary history
* Commit and push to your branch to address feedback from code review
* Link commit SHA in Github comments so your reviewer can jump directly to the
  commit where you fixed whatever was brought up

### Pre-Merge

* Do one large rebase to bring your branch up-to-date with master
* Do not push rebased version — keeps commentary history
* Do explicitly merge with master \(using —no-ff\)
* This merge commit does have value, indicates a feature has landed

### Workflow

1. Get assigned issue on Github
2. `git checkout -b [your-name]/[feature]` - \(Create feature branch\)
3. Work on feature
4. Prep for PR

5. `git fetch`

6. `git rebase origin/master -i`
7. `git push origin [your-name]/[feature] -f`

8. Open PR

9. Respond to PR feedback \(commit and push only\)
10. Merge
11. Close PR and link merge commit SHA in comment
12. Close relevant issue and link merge commit SHA in comment

### Merging

* `git fetch`
* `git checkout [your-name]/[feature]`
* `git rebase origin/master`
* …resolve conflicts…
* `git checkout master`
* `git reset --hard origin/master`
* `git merge --no-ff [your-name]/[feature]`
* …there should be no conflicts at this point since they were resolved already…
* …make sure you can build, no warnings, etc…
* `git push origin master`

### Escape Hatches

* `git rebase --abort` while rebasing
* `git reset --hard ORIG-HEAD` after rebasing
* `git reflog` if you accidentally delete something you don’t mean to



