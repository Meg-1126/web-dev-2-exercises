// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// Refactor the newTask function to use methods for logging state and marking task as completed.
function newTask(title, description) {
  const taskObj = {
    taskTitle: title, 
    taskDescription: description, 
    markCompleted: function(){
      taskObj.complete = true;
      return;
    },
    logState: function () {
    if (this.complete) {
      console.log(`${this.taskTitle} has been completed`);
      return;
    }
    console.log(`${this.taskTitle} has not been completed`);
    }
    
  }
  return taskObj;
};
  
  // taskTitles.push(title);
  // taskComplete.push(false);
  // taskDescriptions.push(description);
  // const taskObj = {task:taskTitles, description:taskDescriptions, complete:taskComplete};


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskObj) {
  // taskComplete[taskIndex] = true;
  taskObj.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskObj) {
  const title = taskObj.taskTitle;
  const complete = taskObj.complete;
  // const complete = taskComplete[taskIndex];
  // const complete = taskComplete[taskObj.complete];
  console.log(`${title} has${complete ? ' ' : ' not '}been completed`);
}

// DRIVER CODE BELOW
//Step3
const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
//Step2
// const task1 = newTask(
//   'Clean Cat Litter',
//   'Take all the 💩 out of the litter box'
// );
// const task2 = newTask('Do Laundry', '😨');
// const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// console.log(tasks);

//Step1
// const task1 = newTask(
//   'Clean Cat Litter',
//   'Take all the 💩 out of the litter box'
// );
// const task2 = newTask('Do Laundry', '😨');
// const tasks = [task1, task2];

// // for now, let's just make sure we see our tasks
// console.log(tasks);

//First code:
// newTask('Clean Cat Litter'); // task 0
// newTask('Do Laundry'); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
