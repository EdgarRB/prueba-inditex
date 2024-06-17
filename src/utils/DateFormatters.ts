export const formatDuration = (millis: number) => {
  if (millis) {
    const seconds = Math.floor((millis / 1000) % 60);
    const minutes = Math.floor((millis / (1000 * 60)) % 60);
    const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);

    const hoursString = hours > 1 ? `${hours}h` : '';
    const minutesString = minutes > 1 ? `${minutes}m` : '';

    return `${hoursString} ${minutesString} ${seconds}s`;
  }
  return 'no information';
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};
