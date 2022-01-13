try {
  throw 1;
} catch (error) {
  console.error(error);
  return;
} finally {
  console.log(3);
}

console.log(2);
