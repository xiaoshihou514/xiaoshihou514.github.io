# Variables
SITE_DOMAIN := xiaoshihou.srht.site
BUILD_DIR   := .vitepress/dist
ARCHIVE     := site.tar.gz

.PHONY: all install build package upload clean

# Default target: does everything except the final upload
all: build package

# Run the VitePress build
build:
	npm run build

# Create the deployment archive
# Note: This creates the tarball from the contents of the build directory
package: build
	tar -cvz -C $(BUILD_DIR) . > $(ARCHIVE)

# Upload to SourceHut Pages using the hut CLI
upload: package
	hut pages publish -d $(SITE_DOMAIN) $(ARCHIVE)

# Clean up the archive
clean:
	rm -f $(ARCHIVE)
