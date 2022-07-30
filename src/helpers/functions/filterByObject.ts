export default function filterByObject(
  array: any[],
  object: { [key: string]: string },
) {
  const keys = Object.keys(object) as string[];
  let filteredData: any[] = [];
  keys.forEach((key) => {
    filteredData = array.filter((item) => {
      if (object[key] === "showAll") return true;
      if (!item[key] || item[key] !== object[key]) return false;
      return true;
    });
  });

  return filteredData;
}
