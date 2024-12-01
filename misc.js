
export const calculateFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

export const getFibonacci = (n) => {
  try {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return getFibonacci(n - 1) + getFibonacci(n - 2);
  } catch (e) {
    return -1;
  }
}