const isArrayEmpty = (arr) => {
  if (arr !== undefined && arr !== null && arr.length > 0) {
    return false;
  }
  return true;
};

const dumpLogs = (message) => {
    console.log(message)

    //Send it to a tool for tracking
}

export {isArrayEmpty, dumpLogs};

