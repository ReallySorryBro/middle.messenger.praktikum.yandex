export const isFormValid = (errors: Record<string, string>, fields: Record<string, string>) => {
  let isValid = true;

  Object.values(errors).forEach(error => {
    if (error) {
      isValid = false;
    }
  });
  Object.values(fields).forEach(field => {
    if (!field) {
      isValid = false;
    }
  });

  return isValid;
};
