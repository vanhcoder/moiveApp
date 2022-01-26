const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd117754dcd242d222e71bc8373effb85',
    originalImage:(imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;