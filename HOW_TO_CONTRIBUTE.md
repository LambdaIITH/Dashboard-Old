Anyone who is looking forward to contribute to Dashboard , please follow the following steps : 

## STEP 1 : Creating a Fork and cloning Dashboard :
* Click on "Fork" button (On top right below the navbar) to fork Dashboard.
* Open https://github.com/YourUserName/Dashboard and verify if fork is successful.
* Open explorer and choose a directory at your convenience and open Terminal.
* Clone the 'forked' repository i.e
  ```
  git clone https://github.com/YourUserName/Dashboard 

  ```
  
## STEP 2: Create a New branch and work on the changes you want to make:
* Make a new branch in your fork and name it as per the feature you want to add i.e
  ```
  git checkout -b "relevantBranchName"
  
  ```
* Add your new file / Edit existing files as you want. 

## STEP 3: Commit and Push the changes in your fork
 * While writing a commit message ,follow COMMIT_MESSAGE_GUIDELINES.md .Make changes and push it in the branch you checked out. 
 
   ```
   git add .
   git add remote myfork https://github.com/YourUserName/Dashboard
   git commit  
   git push myfork relevantBranchName
   ```

## STEP 4 : Open a Pull request 
  * Goto your fork link in browser , select the branch you checked out and follow the prompt of opening a new pull request.
  * You can also go to https://github.com/LambdaIITH/Dashboard/pulls and click on New pull request and select the branch you used to make the feature.

## STEP 5 : Review by admins and making changes 
  * After you submit your pull request , admins will review it and instruct you to make some changes if we find something is wrong.
  * If you are asked to Change your commit message , do :
    
    ```
    git commit -a -amend
    git push --force myfork
    
    ```
  * As people work on Dashboard new commits will be added. This will result in your local fork going out of sync with the remote repository. To sync your changes with the remote repository run the following commands in the desired branch  
    ```
    git remote add origin https://github.com/LambdaIITH/Dashboard
    git fetch origin
    git checkout relevantBranchName
    git rebase origin/master
    git push myfork --force
    ```
  
  * If you are asked to make changes in your files instead of continously making changes with multiple commits , please rebase it into a single commit :
    * Let's say you opened a pull request which had one commit ( Always do like that ) . Now you are instructed to make changes . You pushed the changes like 
      ```
      git commit -m "Correct mistakes"
      git push myfork relevantBranchName

      ```
    * Now you have 2 commits in your pull request , and should be rebased into 1 commit.For that ,do :
    
      ```
      git rebase -i master

      ```
      
      An editor will be fired up with all the commits in your current branch (ignoring merge commits), which come after the given commit. Keep the first one as “pick” and on the second and subsequent commits with “squash”. After saving, another editor will be fired up with all the messages of commits which you want to squash. Clean up all the messages and add a new message to be displayed for the single commit.
      Then do :
      ```
      git push --force myfork
      
      ```
      
 ## STEP 6 : You're done ! Your Pull Request can be merged by the admins now. 
