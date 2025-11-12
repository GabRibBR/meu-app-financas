// Um Service Worker muito simples para começar
// Ele não faz cache offline ainda, mas registra o app como PWA

self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  // Ativa o SW imediatamente
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  // Garante que o SW ativado tome controle
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Por enquanto, apenas busca da rede.
  // Isso é necessário para o PWA ser "instalável".
  event.respondWith(fetch(event.request));
});
