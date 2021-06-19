const printThousandTimes = (times) => {
  const max = 1000;
  if (!isNaN(times)) {
    if (times < max) {
      console.log("This is a string,  number:", times);
      times++;
    } else {
      return;
    }
    printThousandTimes(times++);
  } else {
    console.log("Please only use numbers!");
  }
};

printThousandTimes(0);
