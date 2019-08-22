export const doingHardWork = (seconds) => {
  const now = Date.now();
  let current = new Date();
  while(current < now + seconds) {
    current = new Date();
  }

  console.log('Doing hard work...');

  return { from: now, took: `${seconds} ms` };
}
