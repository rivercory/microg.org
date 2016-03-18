INSTALL_DIR ?= out
DISCOUNT_BIN ?= discount-theme
FILES := index.html gmscore.html unifiednlp.html download.html fdroid.html $(ADDITIONAL_FILES)
TEMPLATE_PARTS := template/head.tpart.html template/navbar.tpart.html template/footer.tpart.html
DEFAULT_TEMPLATE := template/page.template.html
DATA := favicon.ico robots.txt css fonts img js
DATA_FILES := css/bootstrap.min.css css/default.css js/bootstrap.min.js js/fdroid.js js/jquery-2.2.1.min.js

all: $(FILES)

%.html: %.md $(DEFAULT_TEMPLATE) $(TEMPLATE_PARTS)
	$(DISCOUNT_BIN) -t $(DEFAULT_TEMPLATE) $<

clean:
	rm -f $(FILES)
	rm -rf $(INSTALL_DIR)

install: all $(DATA)
	mkdir -p $(INSTALL_DIR)
	cp -r $(FILES) $(DATA) $(INSTALL_DIR)
