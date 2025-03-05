import os

# Go through the WP dir and prep an array with the paths encased in the @asset() drective
wp_dir = "assets/wallpapers"
asset_paths = []
for dirpath, _, filenames in os.walk(wp_dir):
    filenames.sort()
    for filename in filenames:
        # Creates Entry like: /assets/wallpapers/background-001.png
        asset_paths.append(f"/{dirpath}/{filename}")

with open("source/Paths.mint", "w") as file:
    file.write("module Paths {\n")
    file.write("    style wallpapers {\n")
    for path in asset_paths:
        name = os.path.split(path)[1]
        name = os.path.splitext(name)[0]
        file.write(f"        --{name}: url(@asset(..{path}));\n")
    file.write("    }\n")
    file.write("\n")
    file.write("    fun render : Html {\n")
    file.write("        <div::wallpapers>\n")
    file.write("            \n")
    file.write("        </div>\n")
    file.write("    }\n")
    file.write("}")