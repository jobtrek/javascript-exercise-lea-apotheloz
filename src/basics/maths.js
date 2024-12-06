/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  // Write your code here
  if (typeof diameter !== "number" || isNaN(diameter) || diameter < 0) {
    throw new Error("...")
  }
  const radius = diameter / 2
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  return volume
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  // Write your code here
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("...")
  }
  let number = Math.round(n * 10) / 10
  return number
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  // Write your code here
  if (!Array.isArray(grades) || (!grades.every(item => typeof item === "number" && !isNaN(item)))) {
    throw new Error("...")
  }
  let sum = 0
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  return sum / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
  if (!Array.isArray(grades) || (!grades.every(item => typeof item === "number" && !isNaN(item)))) {
    throw new Error("...")
  }
  let sum = 0
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  let sums = sum / grades.length
  return Math.round(sums * 10) / 10
}