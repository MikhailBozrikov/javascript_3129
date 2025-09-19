import { productForm } from "./form.js";

async function submit() {
  const renderTable = await import("./renderTable.js");

  const handleFormSubmit = await import("./handleFormSubmit.js");

  productForm.addEventListener('submit', handleFormSubmit.default);

  renderTable.default();
}

submit();