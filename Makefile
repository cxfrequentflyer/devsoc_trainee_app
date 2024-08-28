.PHONY: open

open:
	@echo "Opening index.html..."
	@$(BROWSER) index.html

BROWSER := $(shell which xdg-open || which open || which start)
