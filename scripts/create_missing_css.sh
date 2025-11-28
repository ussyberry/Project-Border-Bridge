#!/bin/bash

find . -name "*.jsx" | while read filename; do
  # Extract CSS import paths, e.g., './SomePage.css'
  grep -o "import \s*'\.\/[a-zA-Z0-9_-]\+\.css'" "$filename" | \
  while read -r import_statement; do
    # Extract just the filename from the import statement
    css_file=$(echo "$import_statement" | sed -E "s/import \s*'\.\/([a-zA-Z0-9_-]+)\.css'/\1.css/")
    css_path="$(dirname "$filename")/$css_file"
    if [ ! -f "$css_path" ]; then
      echo "Creating missing CSS file: $css_path"
      touch "$css_path"
    fi
  done
done


