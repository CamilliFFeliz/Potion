// Acessando o vídeo pelo ID
const video = document.getElementById('meu-video');

// Definindo a velocidade de reprodução programada para o vídeo
video.playbackRate = 0.5;  // 0.5 faz o vídeo rodar a metade da velocidade normal (pode alterar para qualquer valor desejado)

// O valor padrão de playbackRate é 1 (velocidade normal)
// Outros valores podem ser:
// - 0.25 (25% da velocidade original)
// - 1 (velocidade normal)
// - 2 (duas vezes mais rápido)
// - 0.5 (metade da velocidade)