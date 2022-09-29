// List of commands that do not require API calls

import packageJson from '../../../package.json';
import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `¡Bienvenidos! Aquí están todos los comandos disponibles:
\n${c}\n
[tab]: finalización del disparador.
[ctrl+l]/borrar: borrar terminal.\n
Escriba 'sumfetch' para mostrar el resumen.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Abriendo repositorio de github...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hola, yo soy ${config.name}. 
¡Bienvenidos a mi sitio web!
Más sobre mí:
'sumfetch' - breve resumen.
'resume' - mi portfolio.
'changelog' - mi github changelog.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Abriendo resumen...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Abriendo mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}`);

  return 'Abriendo github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}`);

  return 'Abriendo linkedin...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://twitter.com/${config.social.twitter}`);

  return 'Abriendo twitter...';
};

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}`);

  return 'Abriendo instagram...';
};

export const unsplash = async (args: string[]): Promise<string> => {
  window.open(`https://unsplash.com/es/${config.social.unsplash}`);

  return 'Abriendo unsplash...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Buscando en google ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Buscando duckduckgo para ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `¿Wow en serio? Estás usando Bing para ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Buscando reddit para ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `me
gustan
los
bulldog
ingles`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `desafortunadamente, no puedo permitirme más directorios.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Woah, ¿todavía usas 'vi'? solo prueba 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' está tan desactualizado. ¿Qué hay de 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `¿'nvim'? demasiado elegante ¿Por qué no 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `¿Sabes que? solo usa vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=gjeOZ4sR7qY', '_blank'); // ...I'm sorry
  return `Permiso denegado: Un gran poder conlleva una gran responsabilidad.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ███████╗ ████████╗██╗     ██╗███████╗████████╗
  ██╔════╝ ██╔═══██╗██║     ██║██╔══██╗╚══██╔══╝
  ██║  ███╗██║   ██║██║     ██║███████║   ██║   
  ██║   ██║██║   ██║██║     ██║██╔══██║   ██║   
  ╚██████╔╝╚██████╔╝███████╗██║██║  ██║   ██║   
   ╚═════╝  ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝   ╚═╝

Version del software v${packageJson.version}

--
Escriba 'help' para ver la lista de comandos disponibles.
`;
};
