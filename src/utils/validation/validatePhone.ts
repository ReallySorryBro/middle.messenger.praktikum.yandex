export const validatePhone = (phone: string) => {
  const regexp = /^[+]?[\d]{10,15}$/;

  return regexp.test(phone);
};
