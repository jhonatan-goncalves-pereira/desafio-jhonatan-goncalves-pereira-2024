class RecintosZoo {
    constructor() {
        // Recintos existentes
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ especie: 'MACACO', quantidade: 3 }] },
            { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
            { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ especie: 'GAZELA', quantidade: 1 }] },
            { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
            { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ especie: 'LEAO', quantidade: 1 }] }
        ];

        // Tabela de animais e suas características
        this.animais = {
            'LEAO': { tamanho: 3, biomas: ['savana'], carnivoro: true },
            'LEOPARDO': { tamanho: 2, biomas: ['savana'], carnivoro: true },
            'CROCODILO': { tamanho: 3, biomas: ['rio'], carnivoro: true },
            'MACACO': { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
            'GAZELA': { tamanho: 2, biomas: ['savana'], carnivoro: false },
            'HIPOPOTAMO': { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
        };
    }

    analisaRecintos(animal, quantidade) {
        // Verifica se o animal é válido
        if (!this.animais[animal]) {
            return { erro: "Animal inválido" };
        }

        // Verifica se a quantidade é um número válido
        if (isNaN(quantidade) || quantidade < 1) {
            return { erro: "Quantidade inválida" };
        }

        // Se o animal e a quantidade forem válidos, continuamos com a lógica
        return this.filtrarRecintosViaveis(animal, quantidade);
    }

    filtrarRecintosViaveis(animal, quantidade) {
        const animalInfo = this.animais[animal];
        const recintosViaveis = [];

        this.recintos.forEach((recinto) => {
            let espacoLivre = recinto.tamanho;
            let animaisNoRecinto = [...recinto.animais];

            // Verifica se o bioma é compatível
            if (!animalInfo.biomas.includes(recinto.bioma) && !(animal === 'HIPOPOTAMO' && recinto.bioma === 'savana e rio')) {
                return;
            }

            // Verifica se animais carnívoros estão com a mesma espécie
            if (animalInfo.carnivoro && animaisNoRecinto.some(a => a.especie !== animal)) {
                return;
            }

            // Verifica se animais existentes vão continuar confortáveis
            let espacoOcupado = animaisNoRecinto.reduce((acc, a) => acc + a.quantidade * this.animais[a.especie].tamanho, 0);
            if (animaisNoRecinto.length > 1) {
                espacoOcupado += 1; // Espaço extra quando há mais de uma espécie
            }

            // Calcula o espaço necessário para o novo animal
            let espacoNecessario = quantidade * animalInfo.tamanho;
            if (animaisNoRecinto.length > 0 && animaisNoRecinto[0].especie !== animal) {
                espacoNecessario += 1; // Espaço extra se houver mais de uma espécie no recinto
            }

            // Verifica se há espaço suficiente no recinto
            if (espacoOcupado + espacoNecessario <= recinto.tamanho) {
                recintosViaveis.push({
                    numero: recinto.numero,
                    espacoLivre: recinto.tamanho - (espacoOcupado + espacoNecessario),
                    espacoTotal: recinto.tamanho
                });
            }
        });

        // Retorna os recintos viáveis ordenados pelo número do recinto
        if (recintosViaveis.length > 0) {
            recintosViaveis.sort((a, b) => a.numero - b.numero);
            return { recintosViaveis: recintosViaveis.map(r => `Recinto ${r.numero} (espaço livre: ${r.espacoLivre} total: ${r.espacoTotal})`) };
        } else {
            return { erro: "Não há recinto viável" };
        }
    }
}

export { RecintosZoo as RecintosZoo };
