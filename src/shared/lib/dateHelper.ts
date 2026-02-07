const dateHelper = () => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const formatted = date.toLocaleDateString("en-US", options);
  // Пример: "Jun 14, 2024"

  const result = formatted.replace(",", ""); // "Jun 14 2024"

  return result;
};

export default dateHelper;
