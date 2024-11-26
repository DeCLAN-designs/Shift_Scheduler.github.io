document.getElementById("generate-schedule").addEventListener("click", generateSchedule);

function generateSchedule() {
  const startDate = document.getElementById("start-date").value;
  const daysToShow = parseInt(document.getElementById("days-to-show").value); // Get the number of days from dropdown
  if (!startDate) {
    alert("Please select a start date!");
    return;
  }

  const calendarDiv = document.getElementById("calendar");
  calendarDiv.innerHTML = ""; // Clear previous calendar

  const shifts = ["day-shift", "night-shift", "off-day"];
  const shiftLabels = ["Day Shift", "Night Shift", "Off Day"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const start = new Date(startDate);

  for (let i = 0; i < daysToShow; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);

    const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Get day name
    const shiftIndex = (i % 9) < 3 ? 0 : (i % 9) < 6 ? 1 : 2; // Calculate shift
    const shiftClass = shifts[shiftIndex];
    const shiftLabel = shiftLabels[shiftIndex];

    const dayDiv = document.createElement("div");
    dayDiv.className = `calendar-day ${shiftClass}`;
    dayDiv.innerHTML = `
      <strong>${currentDate.toDateString()}</strong><br>
      <span>${dayOfWeek}</span><br>
      <em>${shiftLabel}</em>
    `;

    calendarDiv.appendChild(dayDiv);
  }
}
