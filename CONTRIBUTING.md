# Contributing to the code

## Issue contributions

### Did you find a bug?

Open a [new issue](https://github.com/open-devans/website/issues/new).
Be sure to include a title and clear description, with as much relevant information
as possible. If you have a code sample that illustrates the problem that would be even better!

## Code contributions

### Fork

Fork the project [on GitHub](https://github.com/open-devans/website)
and check out your copy locally.

```
git clone git@github.com:username/website.git
cd website
git remote add upstream https://github.com/open-devans/website.git
```

### Branch

Create a feature branch and start hacking:

```
git checkout -b my-contrib-branch
```

### Commit messages

Writing good commit logs is important. A commit log should describe what
changed and why. Follow conventional commits when writing one:

Example of commit message:

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Rebase to keep updated

Use `git rebase` to sync your work from time to time.

```
git fetch upstream
git rebase upstream/main
```

### Push

```
git push origin my-contrib-branch
```

Go to https://github.com/yourusername/website and select your feature branch.
Click the 'Pull Request' button and fill out the form.
