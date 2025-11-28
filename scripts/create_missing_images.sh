#!/bin/bash

find . -name "*.jsx" | while read filename; do
  # Extract image import paths, e.g., from '../assets/images/some-image.jpg'
  grep -o "from '\.\./assets/images/[^']\+'" "$filename" | \
  while read -r import_statement; do
    # Extract just the image path from the import statement
    image_path_relative=$(echo "$import_statement" | sed -E "s/from '\.\.\/assets\/images\/(.*)'/\1/")
    # The image path is relative to the src directory, so we construct the full path
    full_image_path="./src/assets/images/$image_path_relative"

    if [ ! -f "$full_image_path" ]; then
      echo "Creating missing image file: $full_image_path"
      # Create the directory if it doesn't exist
      mkdir -p "$(dirname "$full_image_path")"
      # Create an empty file as a placeholder
      touch "$full_image_path"
    fi
  done
done


