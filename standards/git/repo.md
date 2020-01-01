---
description: 'Contributors: Alicia Wang'
---

# Initializing a Repository

## Workflow

1. Add files to staging area \(local\)
2. Create a commit object from staged files \(local\)
3. Push commits to remote repository \(remote\)

![](https://paper-attachments.dropbox.com/s_D8F66C7FAD791038CDAF79C9D57B71B6A6E39E9EA9887D408A0733B042741000_1541311324474_Screen+Shot+2018-11-04+at+1.01.52+AM.png)

### Setup and Use

**Install Git**

\*\*\*\*[https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

**Set up Git** 

`>>> git config --global user.name "Alicia Wang"`

`>>> git config --global user.email "aw@gmail.com"`

Use the email you plan to sign up to Github with. You can check that the configuration was set properly with:

`>>> git config --list`

**Create new project folder**

`>>> mkdir git-demo>>> cd git-demo`

This is the local source code we will be working with in the demo.

**Create some files**

`>>> vim README.md`

**Initialize a new Git repository**

`>>> git init`

This will create a hidden `.git` folder that contains all the necessary Git metadata for Git to work. Essentially turns your working directory into one that allows you to start recording revisions for it.

**Set up the remote repository**

`>>> git remote add origin https://github.com/username/git-demo.git`

This will set the remote repository, i.e. the versions of your project that are hosted somewhere other than your local computer. You will be pushing and pulling from this remote repository.  
origin is a shorthand alias for the URL of the remote repository that a project was originally cloned from. It’s a standard convention, but could be renamed if you so desire \(but don’t\). 

**Add file to staging area**

`>>> git add README.md`

**Commit staged files locally**

`>>> git commit -m "Initialize README"`

Why is there a difference between add and commit? Suppose we created new files feature1.py and feature2.py. These two features may not have much in common. Then it is helpful to have two separate commits for each file instead of having one commit for both files in order to keep our commit history readable and useful. 

**Check commit log**

`>>> git log`

This will show a history of all the previous \(local and remote\) commits made on the current branch.

**Push to remote**

`>>> git push --set-upstream origin master`

`--set-upstream` sets the default remote branch to origin/master for the current local branch master. Any git pull in the future will bring in commits from origin/master.  
You can then see your changes on Github! What if we edit the README directly at the remote repository? How do we update locally?

**Pull in remote updates**

`>>> git pull`

This will update your local repository with new changes from the remote repository.

**Create feature branch**

`>>> git checkout -b new-feature`

`checkout` will allow you to switch between branches. The -b \[name\] will create a new branch. To check out an existing branch, you can just do git checkout existing-branch. 

**Merge changes into master**

`>>> git checkout master`

`>>> git merge new-feature`

