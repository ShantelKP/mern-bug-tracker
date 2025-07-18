const { Bug } = require('../index');

describe('Bug Model Validation', () => {
  it('should require title and description', async () => {
    const bug = new Bug({});
    let err;
    try {
      await bug.validate();
    } catch (e) {
      err = e;
    }
    expect(err.errors.title).toBeDefined();
    expect(err.errors.description).toBeDefined();
  });
});
