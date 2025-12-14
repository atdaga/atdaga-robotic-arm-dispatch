import { sort } from '../src/sort';

describe('sort', () => {
  describe('STANDARD packages', () => {
    it('returns STANDARD for small, light package', () => {
      expect(sort(10, 10, 10, 5)).toBe('STANDARD');
    });

    it('returns STANDARD for package just under all thresholds', () => {
      expect(sort(99, 100, 100, 19)).toBe('STANDARD');
    });
  });

  describe('SPECIAL packages (bulky only)', () => {
    it('returns SPECIAL when volume equals 1,000,000', () => {
      expect(sort(100, 100, 100, 10)).toBe('SPECIAL');
    });

    it('returns SPECIAL when volume exceeds 1,000,000', () => {
      expect(sort(200, 200, 200, 10)).toBe('SPECIAL');
    });

    it('returns SPECIAL when width equals 150', () => {
      expect(sort(150, 10, 10, 10)).toBe('SPECIAL');
    });

    it('returns SPECIAL when height equals 150', () => {
      expect(sort(10, 150, 10, 10)).toBe('SPECIAL');
    });

    it('returns SPECIAL when length equals 150', () => {
      expect(sort(10, 10, 150, 10)).toBe('SPECIAL');
    });

    it('returns SPECIAL when dimension exceeds 150', () => {
      expect(sort(200, 10, 10, 10)).toBe('SPECIAL');
    });
  });

  describe('SPECIAL packages (heavy only)', () => {
    it('returns SPECIAL when mass equals 20', () => {
      expect(sort(10, 10, 10, 20)).toBe('SPECIAL');
    });

    it('returns SPECIAL when mass exceeds 20', () => {
      expect(sort(10, 10, 10, 50)).toBe('SPECIAL');
    });
  });

  describe('REJECTED packages (bulky and heavy)', () => {
    it('returns REJECTED when bulky by volume and heavy', () => {
      expect(sort(100, 100, 100, 20)).toBe('REJECTED');
    });

    it('returns REJECTED when bulky by dimension and heavy', () => {
      expect(sort(150, 10, 10, 20)).toBe('REJECTED');
    });

    it('returns REJECTED when very bulky and very heavy', () => {
      expect(sort(200, 200, 200, 100)).toBe('REJECTED');
    });
  });
});
