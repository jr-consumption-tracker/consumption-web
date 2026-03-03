/**
 * Scroll to view
 * @param id - ID elementu, který se má zobrazit
 * @returns void
 */
const scrollToView = (id: string) => {
  return document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default scrollToView;
