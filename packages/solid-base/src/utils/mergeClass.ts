export const mergeClass = (base: string, local: string | undefined) => {
  return local ? `${base} ${local}` : base;
};
