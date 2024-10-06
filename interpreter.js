// Define the interpreter object with slang translation rules
const genZInterpreter = {
  bet: true,
  noCap: true,
  vibeCheck: (condition) => (condition ? "positive" : "negative"),
  slay: (message) => console.log("Slay:", message),
  flex: (message) => console.log("Flex:", message),
  itsGiving: (vibe) => `It's giving ${vibe}`,
  periodt: "End of statement.",
  ghost: (element) => (element.style.display = "none"),
  spillTea: (info) => console.log("Tea:", info),
  glowUp: (code) => `Refactored $ {
        code
    }

    `,
  shook: (message) => console.error("Shook:", message),
  goOff: (message) => console.log("Go off:", message),
  mainCharacter: "This is the main character.",
  simpFor: "button",
};

// Simple function to parse and run Gen Z code
function runCode() {
  const code = document.getElementById("codeInput").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.innerHTML = "";

  try {
    // Interpret code using Gen Z rules
    let parsedCode = code
      .replace(/bet/g, "genZInterpreter.bet")
      .replace(/noCap/g, "genZInterpreter.noCap")
      .replace(/vibeCheck\((.*?)\)/g, "genZInterpreter.vibeCheck($1)")
      .replace(/slay\((.*?)\)/g, "genZInterpreter.slay($1)")
      .replace(/flex\((.*?)\)/g, "genZInterpreter.flex($1)")
      .replace(/itsGiving\((.*?)\)/g, "genZInterpreter.itsGiving($1)")
      .replace(/periodt/g, "genZInterpreter.periodt")
      .replace(/ghost\((.*?)\)/g, "genZInterpreter.ghost($1)")
      .replace(/spillTea\((.*?)\)/g, "genZInterpreter.spillTea($1)")
      .replace(/glowUp\((.*?)\)/g, "genZInterpreter.glowUp($1)")
      .replace(/shook\((.*?)\)/g, "genZInterpreter.shook($1)")
      .replace(/goOff\((.*?)\)/g, "genZInterpreter.goOff($1)")
      .replace(/mainCharacter/g, "genZInterpreter.mainCharacter")
      .replace(/simpFor/g, "genZInterpreter.simpFor");

    // Execute the parsed code
    const result = eval(parsedCode);
    outputDiv.textContent =
      result !== undefined ? result : "Code executed successfully.";
  } catch (error) {
    outputDiv.textContent = `Error: $ {
            error.message
        }

        `;
  }
}

// Test cases you can use in the textarea:
// bet
// noCap
// slay('You did amazing!')
// flex('New feature added')
// itsGiving('main character energy')
// spillTea('App crashed due to memory leak')
