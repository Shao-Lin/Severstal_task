const dateHelper = () => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const formatted = date.toLocaleDateString("en-US", options);

  const result = formatted.replace(",", "");

  return result;
};

export default dateHelper;
