function toSnakeCase(text) {
    return text.replace(/\s+/g, '_').toLowerCase();
  }
  
  // Exemplo de uso:
  const textoOriginal = "Exemplo de Texto Snake Case";
  const textoSnakeCase = toSnakeCase(textoOriginal);
  console.log(textoSnakeCase);
  

  function compareObjects(obj1, obj2) {
    // Converte os objetos para strings JSON para facilitar a comparação
    const stringObj1 = JSON.stringify(obj1);
    const stringObj2 = JSON.stringify(obj2);
  
    // Compara as strings JSON
    if (stringObj1 === stringObj2) {
      return true; // Objetos são idênticos
    } else {
      // Objetos são diferentes, imprime as chaves diferentes
      const keysObj1 = Object.keys(obj1);
      const keysObj2 = Object.keys(obj2);
  
      const differentKeys = [];
  
      keysObj1.forEach(key => {
        if (!keysObj2.includes(key)) {
          differentKeys.push(key);
        }
      });
  
      keysObj2.forEach(key => {
        if (!keysObj1.includes(key)) {
          differentKeys.push(key);
        }
      });
  
      console.log("Chaves diferentes: ", differentKeys);
      return false;
    }
  }
  
  // Exemplo de uso:
  const objeto1 = { nome: "John", idade: 30, cidade: "Nova York" };
  const objeto2 = { nome: "John", idade: 30, país: "EUA" };
  
  const resultado = compareObjects(objeto1, objeto2);
  console.log("Objetos são idênticos:", resultado);