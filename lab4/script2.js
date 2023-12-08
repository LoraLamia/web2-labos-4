

(function() {
    const tekstovi = [
        'Ovo je slika 1',
        'Ovo je slika 2',
        'Ovo je slika 3',
        'Ovo je slika 4',
        'Ovo je slika 5',
        'Ovo je slika 6',
        'Ovo je slika 7',
        'Ovo je slika 8',
        'Ovo je slika 9',
        'Ovo je slika 10',
        'Ovo je slika 11',
        'Ovo je slika 12',
        'Ovo je slika 13',
        'Ovo je slika 14',
        'Ovo je slika 15',
        'Ovo je slika 16',
        'Ovo je slika 17',
        'Ovo je slika 18',
        'Ovo je slika 19',
        'Ovo je slika 20',
        'Ovo je slika 21',
        'Ovo je slika 22',
        'Ovo je slika 23',
        'Ovo je slika 24',
        'Ovo je slika 25',
        'Ovo je slika 26',
        'Ovo je slika 27',
        'Ovo je slika 28',
        'Ovo je slika 29',
        'Ovo je slika 30',
        'Ovo je slika 31',
        'Ovo je slika 32',
        'Ovo je slika 33',
        'Ovo je slika 34'
    ];

    const slike = document.querySelectorAll('#slike-container img');

    slike.forEach((slika, index) => {
        const paragraf = document.createElement('p');
        paragraf.textContent = tekstovi[index];
        slika.insertAdjacentElement('afterend', paragraf);
    });
})();

