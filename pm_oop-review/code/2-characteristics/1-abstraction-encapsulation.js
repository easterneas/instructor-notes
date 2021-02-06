// Abstraction & Encapsulation

// Saya ingin memiliki sebuah class bernama Camera
// Camera ini punya properti berikut:
// - public: resolution, sensorSize
// - private: manufacturer, manufacturingCode
// Camera juga punya function berikut:
// - shutter() -> mengambil foto, munculkan teks "Photo is successfully taken by {manufacturer}" di console
// - record() -> merekam video, munculkan teks "Video is successfully taken by {manufacturer}" di console

// Class initialization here

// Class instantiation here

const soni = new Camera('400MP', 'half-size', 'Soni', 'SN400')

soni.shutter()
soni.record()