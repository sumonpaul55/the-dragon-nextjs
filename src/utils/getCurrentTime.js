export function getNewDayMonthDateYear() {
    const currentDate = new Date();

    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${dayOfWeek} ${month} ${date}, ${year}`
}

// Example usage:
// const today = getNewDayMonthDateYear();

