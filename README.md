# Information
:pencil: :pencil: :pencil: *Good morning everyone, with great emotion I can tell you that here is my second command line Node.js application.* :pencil: :pencil: :pencil:

Is an app where you can add, remove tasks, get a list of them and read the full information of a specifically task. It uses Yargs for the commands configuration, Fyle System to save, delete and read a task and Chalk for print in colors the responses of your commands
> Juan Villa

## Development Server
Install NodeJS on your PC from [NodeJS](https://nodejs.org/en/), open a terminal and navigate to the project folder that you already install, remember run ```npm install``` (for install the **node_modules** in your PC).

## How Commands Works
Commands: You have to run `node app [command]`
1. `node app add`: Creates a task to do.
2. `node app remove`: Deletes the complete status of a task.
3. `node app list`: Return all your tasks.
4. `node app read`: Read a specifically task.

## How To Run Commands
- For create a task, run `node app add --title="Task title" --body="Task body"`.
- For remove an existent task, run `node app remove --title="Task title`.
- For get a list of all your tasks, run `node app list`.
- For read the information of a task, run `node app --read="Task title"`.
> node app add --title="Christmas Gift" --body="Iphone"

