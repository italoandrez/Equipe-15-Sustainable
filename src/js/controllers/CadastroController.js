const ContainerElement = document.querySelector("#signin");
const tipoElement = document.querySelector("#tipo");
const pessoaElement = document.querySelector("#pessoa");
const formElement = document.querySelector("#generalForm");

function changeValue(elementValue) {
  if (elementValue === "Cliente") {
    const getElementsFornecedor = document.getElementsByClassName(
      "TextInputFornecedor"
    );
    if (getElementsFornecedor.length > 0) {
      for (let len = 0; len < getElementsFornecedor.length; len++) {
        getElementsFornecedor[len].style.display = "none";
      }
    }
    // ---------Add RG input-----------

    // formElement.removeChild()

    const inputElement = document.createElement("div");
    inputElement.setAttribute("class", "TextInputClient");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", "rg");
    const labelText = document.createTextNode("RG");
    labelElement.appendChild(labelText);

    const inputRGElement = document.createElement("input");
    inputRGElement.setAttribute("type", "text");
    inputRGElement.setAttribute("id", "rg");
    inputRGElement.setAttribute("placeholder", "RG");

    inputElement.appendChild(labelElement);
    inputElement.appendChild(inputRGElement);

    formElement.appendChild(inputElement);

    // ---------Add Órgão Expedidor input-----------

    const inputElement2 = document.createElement("div");
    inputElement2.setAttribute("class", "TextInputClient");

    const labelElement2 = document.createElement("label");
    labelElement2.setAttribute("for", "orgao");
    const labelText2 = document.createTextNode("Org.Exp");
    labelElement2.appendChild(labelText2);

    const inputRGElement2 = document.createElement("input");
    inputRGElement2.setAttribute("type", "text");
    inputRGElement2.setAttribute("id", "orgao");
    inputRGElement2.setAttribute("placeholder", "Org.Exp");

    inputElement2.appendChild(labelElement2);
    inputElement2.appendChild(inputRGElement2);

    formElement.appendChild(inputElement2);

    // ---------Add CPF input-----------

    const inputElement3 = document.createElement("div");
    inputElement3.setAttribute("class", "TextInputClient");

    const labelElement3 = document.createElement("label");
    labelElement3.setAttribute("for", "cpf");
    const labelText3 = document.createTextNode("CPF");
    labelElement3.appendChild(labelText3);

    const inputRGElement3 = document.createElement("input");
    inputRGElement3.setAttribute("type", "text");
    inputRGElement3.setAttribute("id", "cpf");
    inputRGElement3.setAttribute("placeholder", "CPF");

    inputElement3.appendChild(labelElement3);
    inputElement3.appendChild(inputRGElement3);

    formElement.appendChild(inputElement3);
  } else if (elementValue === "Fornecedor") {
    const getElementsClient = document.getElementsByClassName(
      "TextInputClient"
    );
    if (getElementsClient.length > 0) {
      for (let len = 0; len < getElementsClient.length; len++) {
        getElementsClient[len].style.display = "none";
      }
    }
    // ---------Add Razão Social input-----------

    const inputElement = document.createElement("div");
    inputElement.setAttribute("class", "TextInputFornecedor");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", "razao");
    const labelText = document.createTextNode("RazãoSocial");
    labelElement.appendChild(labelText);

    const inputRGElement = document.createElement("input");
    inputRGElement.setAttribute("type", "text");
    inputRGElement.setAttribute("id", "razao");
    inputRGElement.setAttribute("placeholder", "RazãoSocial");

    inputElement.appendChild(labelElement);
    inputElement.appendChild(inputRGElement);

    formElement.appendChild(inputElement);

    // ---------Add Inscrição Estadual input-----------

    const inputElement2 = document.createElement("div");
    inputElement2.setAttribute("class", "TextInputFornecedor");

    const labelElement2 = document.createElement("label");
    labelElement2.setAttribute("for", "inscricao");
    const labelText2 = document.createTextNode("Inscrição Estadual");
    labelElement2.appendChild(labelText2);

    const inputRGElement2 = document.createElement("input");
    inputRGElement2.setAttribute("type", "text");
    inputRGElement2.setAttribute("id", "inscricao");
    inputRGElement2.setAttribute("placeholder", "Inscrição Estadual");

    inputElement2.appendChild(labelElement2);
    inputElement2.appendChild(inputRGElement2);

    formElement.appendChild(inputElement2);

    // ---------Add CNPJ input-----------

    const inputElement3 = document.createElement("div");
    inputElement3.setAttribute("class", "TextInputFornecedor");

    const labelElement3 = document.createElement("label");
    labelElement3.setAttribute("for", "cnpj");
    const labelText3 = document.createTextNode("CNPJ");
    labelElement3.appendChild(labelText3);

    const inputRGElement3 = document.createElement("input");
    inputRGElement3.setAttribute("type", "text");
    inputRGElement3.setAttribute("id", "cnpj");
    inputRGElement3.setAttribute("placeholder", "CNPJ");

    inputElement3.appendChild(labelElement3);
    inputElement3.appendChild(inputRGElement3);

    formElement.appendChild(inputElement3);
  }
}