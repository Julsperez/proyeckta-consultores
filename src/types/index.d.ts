// Aquí puedes definir tipos globales o interfaces para props de componentes si lo necesitas.

// Declaraciones de tipos para archivos CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Declaraciones de tipos para archivos de imágenes
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare interface ImportMeta {
  readonly env: {
    readonly BASE_URL: string;
    // otras variables de entorno si las necesitas
  };
} 