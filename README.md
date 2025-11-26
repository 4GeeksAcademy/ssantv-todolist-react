# To-Do List in React — Add, Complete, and Delete Tasks

This project is a simple to-do list application developed with **React**, where you can add new tasks, mark them as completed, delete them individually, or clear the entire list with a single click.


## Important Details

- The entire application is dynamically rendered using **React components**.
- The project uses **states (`useState`)** to manage:
  - Input content
  - The task list
  - Tasks marked as completed
- The project starts with **several predefined tasks**, designed to:
  - Quickly show how it works.
  - Allow you to test the application without having to write tasks from scratch.
  - Use the **“New list”** button, which deletes the entire list to start from scratch.
- The design uses **custom CSS**, without additional external libraries.

## Main features

### 1. Add tasks
- The user can write a task in the text field.
- A task can be added in **two ways**:
  - By clicking the **“Submit”** button
  - By pressing the **Enter** key
- When adding a task:
  - It is added to the list.
  - The text field is automatically cleared.
  - If the input is empty, an alert is displayed.

### 2. Mark tasks as completed
- Clicking on a task marks it as completed.
- Completed tasks are displayed with a strikethrough style.
- Clicking again unmarks the task.

### 3. Delete individual tasks
- Each task includes an **“X”** button to delete it.
- When deleting a task:
  - The list is updated correctly.
  - The completed task status indexes are readjusted to maintain consistency.

### 4. Pending task counter
- Below the list, you can see how many tasks remain uncompleted.
- The number is automatically updated when tasks are completed or deleted.

### 5. Clear the entire list
- **“New list”** button:
  - Deletes ALL tasks (including predefined ones).
  - Also resets the internal status of completed tasks.
- Perfect for starting from scratch.

## How to use the app:

- Type a task in the text field.
- Add it by pressing Enter or the “Submit” button.
- Click on a task to check or uncheck it.
- Press “X” to delete a specific task.
- Use “New list” to clear everything (including predefined tasks).
- Check the pending task counter below the list.

## Notes

- The done status controls which tasks are completed, using their indexes.
- When a task is deleted, the done status indexes are readjusted to maintain consistency.
- The CSS includes details such as custom strikethrough, shadows, SVG icons, and hover effects.

## Suggested improvements

- Add the ability to edit existing tasks.
- Implement animations when adding, deleting, or completing tasks.
- Include filters: all, completed, pending.
- Validate duplicate tasks or add character limits.