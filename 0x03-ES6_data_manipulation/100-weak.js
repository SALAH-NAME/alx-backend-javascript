export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const res = weakMap.get(endPoint) || 0;
  weakMap.set(endPoint, res + 1);
  if (res >= 5) {
    throw new Error('Endpoint load is high');
  }
  return res;
}
