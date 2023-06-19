function formatDate(dateString) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dateParts = dateString.split(' ');
  const month = months.indexOf(dateParts[0]);
  const day = parseInt(dateParts[1].replace(',', ''));
  const year = parseInt(dateParts[2]);
  
  return `${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`;
}

// Example usage
const inputDate = 'June 1, 2023 at 11:28:13 AM UTC+5:30';
const inputDateTwo = 'May 31, 2023 at 11:28:13 AM UTC+5:30';

const formattedDate = formatDate(inputDate);
const formattedDateTwo = formatDate(inputDateTwo);

console.log(formattedDate); // Output: 01/06/2023
console.log(formattedDateTwo); // Output: 31/05/2023
console.log(formattedDate<formattedDateTwo)
var currentTime = new Date();

// Create a Date object for the end time
var endTime = new Date('May 30, 2023 11:28:13 UTC+5:30');

// Add 24 hours to the end time
var endTimePlus24Hours = new Date(endTime.getTime() + (24 * 60 * 60 * 1000));

// Compare the current time with the end time plus 24 hours
if (currentTime > endTimePlus24Hours) {
  console.log('The current time is greater than the end time plus 24 hours.');
  // return true;
} else {
  console.log('The current time is not greater than the end time plus 24 hours.');
  // return false;
}