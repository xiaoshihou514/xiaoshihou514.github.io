#! /usr/bin/env bash
echo "Gitlab:"
glab ci list -R gitlab.com/xiaoshihou/xiaoshihou514.github.io | head -n4 | tail -n1 | rg success --passthru
echo
echo "Codeberg:"
fj --host codeberg.org actions tasks | head -n2 | tail -n1 | rg success --passthru
echo
echo "Sourcehut"
hut pages list
echo
echo "Framagit"
glab ci list -R framagit.org/xiaoshihou/xiaoshihou514.github.io | head -n4 | tail -n1 | rg success --passthru
