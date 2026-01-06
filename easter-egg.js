(function () {
  const commands = {
    help: () => {
      console.log(`
AVAILABLE COMMANDS
------------------
about()        → short identity
projects()     → list experiments
status()       → current mindset
clear()        → clear console
      `);
    },

    about: () => {
      console.log(`
identity://pseudonym
role://developer / experimenter
philosophy://document progress, not perfection
      `);
    },

    projects: () => {
      console.log(`
projects_loaded:
- portfolio system
- experiment archive
- ui prototypes
      `);
    },

    status: () => {
      console.log(`
status://active
focus://learning + building
mood://curious
      `);
    },

    clear: () => console.clear(),
  };

  window.help = () => commands.help();
  window.about = () => commands.about();
  window.projects = () => commands.projects();
  window.status = () => commands.status();

  console.log(
    "%c> i am watching you.",
    "color:#ff0000;font-family:monospace;"
  );

  console.log(
    "%c> system online — type help()",
    "color:#00ff88;font-family:monospace;"
  );
})();

const konami = [
  "ArrowUp", "ArrowUp",
];

let input = [];
let triggered = false;

document.addEventListener("keydown", (e) => {
  input.push(e.key);
  input.splice(-konami.length - 1, input.length - konami.length);

  if (!triggered && input.join("") === konami.join("")) {
    triggered = true;
    activateUnstableMode();
  }
});

function activateUnstableMode() {
  const overlay = document.getElementById("warning-overlay");
  const text = document.getElementById("warning-text");

  overlay.classList.remove("hidden");

  const message = `
WARNING: UNSTABLE AESTHETIC PROFILE LOADED
-----------------------------------------
color matrix override: ACTIVE
visual noise amplification: 143%
glitch injection: ENABLED

this mode is not recruiter-safe.
this mode is not optimized.
this mode is honest.

press any key to continue.
`;

  let i = 0;
  const interval = setInterval(() => {
    text.textContent += message[i];
    i++;
    if (i >= message.length) {
      clearInterval(interval);
    }
  }, 20);

  document.addEventListener("keydown", dismissWarning, { once: true });
}

function dismissWarning() {
  document.body.classList.add("red-mode");
  document.getElementById("warning-overlay").classList.add("hidden");
}
