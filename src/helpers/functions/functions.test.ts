import {
  randomColorsGenerator,
  extractUniqueValues,
  reduceLessonsCount,
} from "helpers/functions";

describe("testing randomColorsGenerator", () => {
  it("testing generating random color", () => {
    const color = randomColorsGenerator("bright");
    expect(color).toMatch(/#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/g);
  });
  it("testing generating multiple random color", () => {
    const colors = randomColorsGenerator("bright", 5);
    const color = colors[0];
    expect(color).toMatch(/#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/g);
    expect(colors).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});

describe("testing extractUniqueValues", () => {
  const sample = [
    { name: "ali", job: "back end engineer" },
    { name: "osama", job: "full stack engineer" },
    { name: "hamza", job: "react engineer" },
    { name: "mai", job: "react engineer" },
    { name: "osama", job: "devOps engineer" },
    { name: "ali", job: "back end engineer" },
  ];

  it("testing the removal of array repetitive values", () => {
    const names = extractUniqueValues(sample, "name");
    const jobs = extractUniqueValues(sample, "job");
    expect(names).toEqual(["ali", "osama", "hamza", "mai"]);
    expect(jobs).toEqual([
      "back end engineer",
      "full stack engineer",
      "react engineer",
      "devOps engineer",
    ]);
  });
});

describe("testing reduceLessonsCount", () => {
  const sample = [
    { name: "ali", job: "back end engineer", lessons: 80 },
    { name: "osama", job: "full stack engineer", lessons: 64 },
    { name: "hamza", job: "react engineer", lessons: 45 },
    { name: "mai", job: "react engineer", lessons: 14 },
    { name: "osama", job: "devOps engineer", lessons: 26 },
    { name: "ali", job: "back end engineer", lessons: 7 },
  ];

  it("testing reduction of items", () => {
    const result = reduceLessonsCount(sample);
    expect(result).toEqual(236);
  });
});
