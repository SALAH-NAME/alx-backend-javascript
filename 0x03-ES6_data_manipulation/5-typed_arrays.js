const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);
  if (position > array.length)
    throw new Error('Position outside range');
  array[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
