type FormatDateOptionsParams = {
  showDay: boolean;
};

const formatDate = (date: string, options: FormatDateOptionsParams = { showDay: true }) => {
  const dateObject = new Date(date);

  const dateString = dateObject.toISOString();

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    ...(options.showDay && { day: "numeric" }),
    timeZone: "UTC",
  });

  return { dateString, formattedDate };
};

export { formatDate };
