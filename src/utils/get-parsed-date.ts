const getParsedDate = (date: string) => {
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return { dateObject, formattedDate };
};

export { getParsedDate };
