import { formatDuration, formatDate } from './DateFormatters';

describe('DateFormatters', () => {
  describe('formatDuration', () => {
    test('should format duration correctly for milliseconds', () => {
      expect(formatDuration(50000)).toBe('  50s');
    });

    test('should return "no information" for zero milliseconds', () => {
      expect(formatDuration(0)).toBe('no information');
    });
  });

  describe('formatDate', () => {
    test('should format date string correctly', () => {
      expect(formatDate('2023-12-31T00:00:00Z')).toBe('31/12/2023');
    });

    test('should return invalid date for undefined dateString', () => {
      expect(formatDate('')).toBe('Invalid Date');
    });
  });
});
