//pega o constructor
const Informations = require('./tags');
const Product = require('./product');

const technicalSheet = new Informations('jogos', 'quarta geração', 'jogos, etudos e trabalho', 'MSI, AMD, XPG, KINGSTON', 
    'Ryzen 5 5600 6 Núcleos 12 Threads, RX 7600 8GB GDDR6 Ray tracing, 16 GB RAM XPG, 512 GB NVME M.2 5000MBs Leit. 3000MBs Grav');
const product = new Product('PC Gamer AMD Ryzen 5 5600, 500GB de mémoria, RX 7600, 16 GB RAM', technicalSheet);

console.log(product)
console.log(product.Informations.description())