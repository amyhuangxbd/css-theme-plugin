import lessVars from '../lib/less-vars';
import path from 'path';

describe('less var to js', () => {
    test('get vars', async () => {
      const data = await lessVars(path.resolve(__dirname, './assets/dark.less'));
      expect(data).toEqual({
        'primary-color': 'red',
        'my-color': 'green',
        'color-test': 'gray',
      });
    });
  });