# Advanced Git

This is a guide for Git operations such as amending, squashing, rebasing, and other helpful things.

## Table of Contents

1. [Editing/Adding Changes to Last Commit](advanced-git.md#editing/adding-changes-to-last-commit)
2. [Squashing Multiple Commits](advanced-git.md#squashing-multiple-commits)
3. [Rebasing Your Branch](advanced-git.md#rebasing-your-branch)
4. [Renaming Files in Git](advanced-git.md#renaming-files-in-git)
5. [Stashing](advanced-git.md#stashing)

## Editing/Adding Changes to Last Commit

**Use Case**: Need to change your last commit message or add/remove/modify files without making a new commit

To add changes to the previous commit, first stage the changed files \(skip this step if you just want to edit the commit message\)

```text
git add [files]
```

To combine these changes to the last commit or to change the last commit’s message

```text
git commit --amend
```

A text editor will then pop up and you can edit the commit message or do nothing to keep it the same. A new commit with your changes and/or new commit message will now have overwritten the previous commit locally.

If you pushed your previous commit \(the commit that was overwritten\) onto GitHub already

```text
git push -f
```

This will overwrite the commit on GitHub with your local commit

## Squashing Multiple Commits

**Use Case:**

* Avoid meaningless commits
* Avoid commits like “Fix typo”
* Reduces number of commits

On the branch with the commits that you want to combine

```text
git rebase -i HEAD~N
```

where N is the number of previous commits that we want to edit.

For example, if you wanted to combine your commits “Another change”, “Edit README again” and “Add message to README”, **N would be 3** since you want to edit the past three commits from HEAD.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_21187026BFA1A7425553AA78FFEE537B8938D15E45EF4C6E875DA48F2B0B5ECB_1553454086578_Screen+Shot+2019-03-24+at+3.01.18+PM.png)

So after running `git rebase -i HEAD~3` an interactive prompt will pop up like this:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_21187026BFA1A7425553AA78FFEE537B8938D15E45EF4C6E875DA48F2B0B5ECB_1553454151917_Screen+Shot+2019-03-24+at+3.02.26+PM.png)

In this prompt it gives the following commands that you can use to edit the commits,

```text
Commands:
p, pick = use commit
r, reword = use commit, but edit the commit message
e, edit = use commit, but stop for amending
s, squash = use commit, but meld into previous commit
f, fixup = like "squash", but discard this commit's log message
x, exec = run command (the rest of the line) using shell
d, drop = remove commit
```

On the first three lines above, we can see that each line starts with a command followed by the commit hash.

We can see that the commits are in order from oldest to newest. In this example, we want to combine the 2nd commit and 3rd commit with the 1st one.

The definition of the squash command is **“use commit, but meld into previous commit”**. Since we want to combine our 2nd and 3rd commit with the 1st one, squash seems like the command we want to use on the 2nd and 3rd commit.

In our text editor, we can change the command **pick** for the 2nd and 3rd commit to **squash \(or s\)** to combine those commits with the one above. The 3rd commit will get melded into the 2nd commit but since the 2nd commit is being melded into the 1st commit, the 2nd and 3rd commit will be combined with the 1st one.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_21187026BFA1A7425553AA78FFEE537B8938D15E45EF4C6E875DA48F2B0B5ECB_1553456557916_Screen+Shot+2019-03-24+at+3.42.34+PM.png)

After saving those changes, another prompt should pop up with the commit messages of the commits you’re combining.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_21187026BFA1A7425553AA78FFEE537B8938D15E45EF4C6E875DA48F2B0B5ECB_1553456656727_Screen+Shot+2019-03-24+at+3.43.26+PM.png)

If you want to keep all messages, you can just save and exit. Or you can edit the commit messages here. Generally, we just want to keep one message so in this example you would delete the 2nd and 3rd commit message, and you can also edit the 1st commit message if you wanted to.

**Note: If you already know that you want to discard the commit messages of the commits you’re squashing, you can use the “fixup” command \(or f\) instead of “squash”.**

After you save and quit, you would get a message like this saying rebasing was successful.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_21187026BFA1A7425553AA78FFEE537B8938D15E45EF4C6E875DA48F2B0B5ECB_1553457045344_Screen+Shot+2019-03-24+at+3.50.42+PM.png)

Now, running `git log` would just show the one commit that you combined everything with.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_21187026BFA1A7425553AA78FFEE537B8938D15E45EF4C6E875DA48F2B0B5ECB_1553457086979_Screen+Shot+2019-03-24+at+3.51.22+PM.png)

If you pushed any of the edited commits onto GitHub already, use the following command to push your changes to GitHub

```text
git push -f
```

This will overwrite those commits on GitHub with your local commit history/new edited commits.

## Rebasing Your Branch

**Use Case:**

* You need new commits from another branch on your branch
* Cleaner merge commits
* Address merge conflicts earlier

  **What is rebasing?**

  > Reapply commits on top of another base tip ![](https://cdn-images-1.medium.com/max/2000/1*FNaZp740nmp8wz851BqcAg.png)

For example \(see image above\), I created a `feature` branch off of the `master` branch at commit B. Then, I made commits E and F on `feature`. At the same time, commits C and D were made on `master`. I realize that I need commits C and D on my `feature` branch since those commits include some code I need. I could do the following to include those commits on my `feature` branch.

```text
git checkout master
git pull // make sure my local master is up to date

git checkout feature
git rebase master
// Address merge conflicts if any
git push -f  // If you previously pushed your branch
```

**Note: You should only rebase on your branches \(never shared branches\)**

## Renaming Files in Git

**Use Case:** You are renaming files in your repo

```text
git mv original_file_name new_file_name
```

**Why?**

* Git will recognize that you renamed the file vs deleted a file and created a new one
* Track changes made with renamed file
* On Mac, if you change the case of a file name Git will not automatically recognize this change
  * Example: `Api.js` → `API.js`

## Stashing

**Use Case:** You want to switch branches or are trying to pull from GitHub and get a message like below, but you don’t want to make a commit

![](https://d2mxuefqeaa7sj.cloudfront.net/s_21187026BFA1A7425553AA78FFEE537B8938D15E45EF4C6E875DA48F2B0B5ECB_1553460263989_Screen+Shot+2019-03-24+at+4.44.20+PM.png)

To save your changes without making a commit

```text
git stash
```

To list all of the changes stashed

```text
git stash list
```

To apply a specific stashed change

```text
git stash apply [index]
```

where index is the index of the specific change in the output of `git stash list`.

To reapply the latest stashed change

```text
git stash pop
```

