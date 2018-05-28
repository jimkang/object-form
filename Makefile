BROWSERIFY = ./node_modules/.bin/browserify

SMOKECHROME = node_modules/.bin/tap-closer | \
	node_modules/.bin/smokestack -b chrome

SMOKEFIREFOX = node_modules/.bin/tap-closer | \
	node_modules/.bin/smokestack -b firefox

test-chrome:
	$(BROWSERIFY) tests/conversion-tests.js | $(SMOKECHROME)

test-firefox:
	$(BROWSERIFY) tests/conversion-tests.js | $(SMOKEFIREFOX)

test: test-firefox test-chrome

pushall:
	git push origin master && npm publish

prettier:
	prettier --single-quote --write "**/*.js"

