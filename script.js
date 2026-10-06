// Task Search Functionality
const searchInput = document.getElementById("taskSearchInput");

if (searchInput) {
  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll(".task-item"); // Adjust class selector to match your task elements

    tasks.forEach((task) => {
      const taskText = task.textContent.toLowerCase();
      if (taskText.includes(searchTerm)) {
        task.style.display = "";
      } else {
        task.style.display = "none";
      }
    });
  });
}
