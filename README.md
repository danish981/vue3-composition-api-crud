# vue3-composition-api-crud

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

To set up a Git hook on Windows that prompts you before pushing to the `master` branch (or any other branch you want to protect), you can create a **pre-push hook**. This hook will run before any push command and can be used to display a warning or even prevent the push unless you explicitly confirm it.

Here’s how to set it up:

### Step 1: Navigate to Your Git Repository

Open your terminal (Command Prompt, Git Bash, or any terminal that you prefer) and navigate to your Git repository:

```sh
cd path/to/your/repository
```

### Step 2: Create the Pre-Push Hook

In your Git repository, navigate to the `.git/hooks` directory:

```sh
cd .git/hooks
```

Create a new file named `pre-push` (without any extension). You can do this using any text editor or the terminal:

```sh
touch pre-push
```

### Step 3: Edit the Pre-Push Hook Script

Open the `pre-push` file in your favorite text editor and add the following script:

```bash
#!/bin/bash

# Get the name of the branch you are pushing to
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Check if the branch is 'master'
if [ "$current_branch" == "master" ]; then
    echo "You are about to push to the master branch."
    read -p "Are you sure you want to continue? (yes/no): " choice
    if [ "$choice" != "yes" ]; then
        echo "Push aborted."
        exit 1
    fi
fi

# Allow the push to proceed
exit 0
```

### Step 4: Make the Script Executable

Ensure the script is executable by running the following command:

```sh
chmod +x .git/hooks/pre-push
```

### Step 5: Test the Hook

Now, when you try to push to the `master` branch, the hook will trigger and prompt you for confirmation. If you type `yes`, the push will proceed. If you type anything else, the push will be aborted.

### Example Workflow

1. You make some changes to your code.
2. You commit those changes.
3. You attempt to push to `master`:

    ```sh
    git push origin master
    ```

4. You will see the prompt:

    ```
    You are about to push to the master branch.
    Are you sure you want to continue? (yes/no):
    ```

5. If you type `yes`, the push proceeds. If you type `no`, the push is aborted.

This simple hook script ensures that you always get a warning before pushing changes directly to `master`, helping you avoid accidental updates.



---------
 
Add form made fucntional with dummy data

https://youtu.be/JDcfOVc4Uww?t=3687