const getParsedDate = (date: string, showDay = true) => {
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    ...(showDay && { day: "numeric" }),
    timeZone: "UTC",
  });

  return { dateObject, formattedDate };
};

export { getParsedDate };
