# IDS_Class_Assignment

# STUDENT TASK MANAGMENT

A pair-based collaborative project designed to demonstrate structured version control, efficient GitHub workflows, conflict resolution, and teamwork over a 5-day cycle.

---

## Project Description

This repository serves as a practical demonstration of real-world collaborative development workflows using Git and GitHub. Over a 5-day timeline, two developers collaborated to plan, develop, review, and merge core features into a unified product using branch protection rules, code reviews, and structured commit strategies.

---

## Team Members

- **Student 1**: [Adeel Khurram/ GitHub Profile Link]
- **Student 2**: [Abdullah Arshad / GitHub Profile Link]

---

## Features

- **Feature A (User Authentication / Core Module)**: User registration, login handling, and input validation.
- **Feature B (Dashboard / Interface Module)**: Interactive interface displaying core application metrics and user status.
- **Feature C (API / Data Integration)**: Mock API endpoints / data fetching pipeline.
- **Responsive Layout / CLI**: Simple interface designed for standard execution.

---

## Technologies

- **Language**: HTML/CSS/Md
- **Version Control**: Git
- **Collaboration & Hosting**: GitHub
- **Testing & Tools**: VS Code, Markdown

---

## Git Workflow

This project utilized the **GitHub Flow** (Branch-per-feature with Pull Requests):

1. **Issue Creation**: Each task/feature started as an Issue on GitHub.
2. **Branching**: Features were built in dedicated branches named with standard conventions
3. **Commits**: Atomic, descriptive commits following Conventional Commit guidelines
4. **Pull Requests (PRs)**: No code was pushed directly to `main`. Every change required a PR with a assigned reviewer.
5. **Code Review & Resolution**: Peer review, address inline comments, and resolve merge conflicts when necessary.
6. **Merge & Cleanup**: PRs were merged into `main` using **Squash & Merge** or standard merge, followed by local and remote branch deletion.

---

## Branches

| Branch Name          | Type       | Description                                      | Primary Contributor |
| :------------------- | :--------- | :----------------------------------------------- | :------------------ |
| `main`               | Production | Stable codebase; protected against direct pushes | Student 1           |
| `feature/task-style` | Feature    | Implemented authentication logic                 | Student 1           |
| `feature/task-form`  | Feature    | Built dashboard UI components                    | Student 2           |

---

## Git Commands Demonstrated

```bash
# 1. Setup & Repository Initialization
git clone [https://github.com/](https://github.com/)<username>/<repo-name>.git
git remote add origin [https://github.com/](https://github.com/)<username>/<repo-name>.git


git checkout -b feature/user-auth
git branch -a
git branch -d feature/user-auth

git add .
git commit -m "feat(auth): add password hashing and email validation"


git fetch origin
git pull origin main
git rebase main

git stash
git stash pop
git log --oneline --graph --all
git status
```
