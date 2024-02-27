function myLocalStorage(
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
) {
  function saveData(data) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("data", JSON.stringify(data));
      alert("Dados salvos com sucesso!");
    } else {
      alert(
        "Seu navegador não suporta o localStorage. Por favor, atualize para uma versão mais recente.",
      );
    }
  }

  function updateData() {
    const dataSalvaJSON = localStorage.getItem("data");
    if (dataSalvaJSON) {
      const dadosSalvos = JSON.parse(dataSalvaJSON);
      alert(`Dados salvos: ${JSON.stringify(dadosSalvos)}`);
    } else {
      alert("Nenhum dado encontrado no localStorage.");
    }
  }

  saveData({ title, description, dueDate, priority, notes, checklist });

  return {
    saveData,
    updateData,
  };
}

export default myLocalStorage;
