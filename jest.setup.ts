jest.mock('@configs/auth', () => ({
  auth: jest.fn(() => {
    return {
      user: {
        id: '123',
        name: 'Mocked name',
        email: 'mocked@email.com',
      },
    };
  }),
}));
