type Stack = 'STANDARD' | 'SPECIAL' | 'REJECTED';

export const sort = (width: number, height: number, length: number, mass: number): Stack => {
  const volume = width * height * length;

  const isBulky = volume >= 1_000_000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) {
    return 'REJECTED';
  }

  if (isBulky || isHeavy) {
    return 'SPECIAL';
  }

  return 'STANDARD';
}
