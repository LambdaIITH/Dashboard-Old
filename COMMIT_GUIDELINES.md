# Commit Guidelines

## What Makes a Good Commit
A good commit is atomic. It should describe only one change and not more.

## How to Write Good Commit Messages
A commit message consists of 3 parts:
  * Shortlog 
    * Maximum of 50 characters
    * Should describe the change - the action being done in the commit.
    * Should have a tag and a short description separated by a colon (:)
    * Tag
        * The file or class or package being modified.
        * Not mandatory.
        * Short Description
        * Starts with a capital letter.
        * Written in imperative present tense (i.e. Add something, not Adding something or Added something).
        * No trailing period.  
  * Commit body 
    * Maximum of 72 chars excluding newline for each line.
    * Not mandatory - but helps explain what you are doing.
    * Should describe the reasoning for your changes. This is especially important for complex changes that are not self explanatory. This is also the right place to write about related bugs.
    * First person should not be used here.
  * Issue reference (Optional)
  * Example:
      ```
      Fixes https://github.com/LambdaIITH/Dashboard/issues/69      
      ```
##Example:
  ```
  route.js: Add routes for new academic portal
  
  This adds routes for the academic portal containing AIMS Authentication and Parsers.
  
  Fixes https://github.com/LambdaIITH/Dashboard/issues/69
  ```
  
