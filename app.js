const file_input = document.querySelector(".file_input");
const convert_btn = document.querySelector(".convert_btn");

convert_btn.addEventListener("click", convertToPdf);

async function convertToPdf() {
  if (file_input.files.length === 0) {
    alert("Please select a text file first");
    return;
  }
  const file = file_input.files[0];
  const textContent = await readFileasText(file);

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  pdf.text(textContent, 10, 10);
  pdf.save("rickpdfgen.pdf");
}
function readFileasText(file) {
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();
    filereader.onload = () => resolve(filereader.result);
    filereader.onerror = () => reject(filereader.error);
    filereader.readAsText(file);
  });
}
