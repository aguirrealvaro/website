const formatDate = (date: string, showDay = true) => {
  const dateObject = new Date(date);

  const dateString = dateObject.toISOString();

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    ...(showDay && { day: "numeric" }),
    timeZone: "UTC",
  });

  return { dateString, formattedDate };
};

export { formatDate };
