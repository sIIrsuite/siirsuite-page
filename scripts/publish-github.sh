#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
repository='siirsuite/siirsuite-page'

# Stop before changing files or creating a repository if GitHub is unavailable.
gh api user >/dev/null
npm run build:pages

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git init -b main
fi
if [[ "$(git rev-parse --show-toplevel)" != "$(pwd -P)" ]]; then
  echo 'Run this script from a standalone checkout of siirsuite-page.' >&2
  exit 1
fi
if [[ "$(git branch --show-current)" != 'main' ]]; then
  echo 'Switch this checkout to main before publishing.' >&2
  exit 1
fi
if ! git config user.name >/dev/null; then
  git config user.name "$(gh api user --jq '.name // .login')"
fi
if ! git config user.email >/dev/null; then
  git config user.email "$(gh api user --jq '(.id|tostring) + "+" + .login + "@users.noreply.github.com"')"
fi
git add --all
if ! git diff --cached --quiet; then
  git commit -m 'Build Siirsuite and Siir websites with GitHub Pages deployment'
fi

# Create exactly the requested public organization repository; never overwrite one.
if gh repo view "$repository" --json name >/dev/null 2>&1; then
  echo "$repository already exists. Review it before using it as the deployment target." >&2
  exit 1
fi
if git remote get-url origin >/dev/null 2>&1; then
  echo 'This checkout already has an origin remote. Review it before creating a new repository.' >&2
  exit 1
fi
gh repo create "$repository" --public --source=. --remote=origin --push

gh api --method POST "repos/$repository/pages" -f build_type=workflow >/dev/null
gh api --method PUT "repos/$repository/pages" -f cname=siirsuite.online -f build_type=workflow >/dev/null
gh workflow run deploy-pages.yml --repo "$repository" --ref main
printf 'Repository: https://github.com/%s\n' "$repository"
echo 'Deployment started. Check its result with:'
printf 'gh run list --repo %s --workflow deploy-pages.yml\n' "$repository"
echo 'DNS and HTTPS still need to be verified in repository Settings → Pages.'
