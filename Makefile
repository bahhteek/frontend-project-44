# Makefile
intall:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

make init:
	npm eslint