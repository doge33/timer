const timeArray = process.argv.slice(2, process.argv.length).sort((a,b) => a-b);

for (let timing of timeArray) {
  let timingNum = Number(timing) * 1000;
  if ( !isNaN(timingNum) && timingNum >= 0) {
    setTimeout(() => {
      process.stdout.write('.');
    }, timingNum);
  }
}
