function mergeHighDefinitionIntervals(intervals) {
  let merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    console.log("outer loop:", intervals[i]);
    const last = merged[merged.length - 1];
    console.log(last);
    const current = intervals[i];

    if (current[0] <= last[1]) {
      last[1] = Math.max(current[1], last[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}

console.log(
  mergeHighDefinitionIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
