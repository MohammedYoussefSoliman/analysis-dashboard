export default function extractUniqueValues(array: any[], key: string) {
  const set = new Set([...array.map((item) => item[key])]);
  return [...set];
}
