module.exports = {
  formatDate: (date) => {
    if (!date) return ''; // Return empty string for null or undefined dates
    return new Date(date).toLocaleDateString(); // Format date as MM/DD/YYYY
  },
};
