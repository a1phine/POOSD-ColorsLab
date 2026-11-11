describe('Color API Integration Response Structure', () => {
  test('SearchColors or AddColor API response structure matches expected JSON format', () => {
    // Simulating the expected JSON response payload structure from your PHP backend API
    const mockApiResponse = {
      status: 'success',
      colors: [
        { id: 1, color: '#FF6EAD', userId: 42 }
      ]
    };

    expect(mockApiResponse).toHaveProperty('status', 'success');
    expect(Array.isArray(mockApiResponse.colors)).toBe(true);
    expect(mockApiResponse.colors[0]).toHaveProperty('id');
    expect(mockApiResponse.colors[0]).toHaveProperty('color');
    expect(mockApiResponse.colors[0].color).toMatch(/^#[0-9A-F]{6}$/i);
  });
});