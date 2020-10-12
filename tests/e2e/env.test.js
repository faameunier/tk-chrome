const timeout = 5000;

describe('testing environment', () => {
  test('has browser', async () => {
    expect(global.__BROWSER__).toBeTruthy();
  });

  test('has tabby', async () => {
    expect(global.__BACKGROUND__).toBeTruthy();
  });

  test('is in debug build', async () => {
    const memoryManager = await global.__BACKGROUND__.evaluate(() => window.memoryManager)
    expect(memoryManager).toBeTruthy();
  });
});
