const all = require('../arrayMethods');

describe('Array functions', () => {
  describe('map()', () => {
    it('should return new array edited by callback', () => {
      const originalArray = [1, 2, 3];
      const copiedArray = [...originalArray];

      expect(all.map(originalArray, (item) => item * 3)).toStrictEqual([3, 6, 9]);
      expect(originalArray).toStrictEqual(copiedArray);

      const callback = jest.fn();

      all.map(originalArray, callback);
      expect(callback).toHaveBeenNthCalledWith(1, originalArray[0], 0, originalArray);
    })
  })

  describe('filter()', () => {
    it('should return filtered new array', () => {
      const originalArray = [1, 2, 3];
      const copiedArray = [...originalArray];

      expect(all.filter(originalArray, (item) => item > 2)).toStrictEqual([3]);
      expect(originalArray).toStrictEqual(copiedArray);

      const callback = jest.fn();

      all.filter(originalArray, callback);
      expect(callback).toHaveBeenNthCalledWith(1, originalArray[0], 0, originalArray);
    })
  })

  describe('some()', () => {
    it('should return boolean', () => {
      const originalArray = [1, 2, 3];
      const copiedArray = [...originalArray];

      expect(all.some(originalArray, (item) => item > 0)).toStrictEqual(true);
      expect(all.some(originalArray, (item) => item > 3)).toStrictEqual(false);
      expect(originalArray).toStrictEqual(copiedArray);

      const callback = jest.fn();

      all.some(originalArray, callback);
      expect(callback).toHaveBeenNthCalledWith(1, originalArray[0], 0, originalArray);
    })
  })

  describe('every()', () => {
    it('should return boolean', () => {
      const originalArray = [1, 2, 3];
      const copiedArray = [...originalArray];

      expect(all.every(originalArray, (item) => item > 0)).toStrictEqual(true);
      expect(all.every(originalArray, (item) => item > 2)).toStrictEqual(false);
      expect(originalArray).toStrictEqual(copiedArray);

      const callback = jest.fn();

      all.every(originalArray, callback);
      expect(callback).toHaveBeenNthCalledWith(1, originalArray[0], 0, originalArray);
    })
  })
});
