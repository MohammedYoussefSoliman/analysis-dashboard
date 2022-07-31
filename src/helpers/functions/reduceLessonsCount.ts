export default function reduceLessonsCount(array: any[]) {
  return array.map((item) => item.lessons).reduce((prev, cur) => prev + cur, 0);
}
