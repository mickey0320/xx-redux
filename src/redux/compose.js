function compose(...args) {
  if (args.length === 0) return () => {};
  if (args.length === 1) {
    return args[0];
  }
  return args.reduce((a, b) => {
    return (...args) => {
      return b(a(...args));
    };
  });
}

export default compose;
