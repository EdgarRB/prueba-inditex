import FormatDescription from './DescriptionFormatter';

describe('FormatDescription', () => {
  it('should format mixed content correctly', () => {
    const description =
      'Test! Visit example.com or https://example.com.\nNew paragraph here.';
    const expected = `<p>Test! Visit <a href="http://example.com" target="_blank" class="text-blue-700">example.com</a> or <a href="https://example.com" target="_blank" class="text-blue-700">https://example.com</a>.</p><p>New paragraph here.</p>`;
    expect(FormatDescription(description)).toBe(expected);
  });
});
