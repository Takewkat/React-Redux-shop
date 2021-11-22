
export default class BookstoreService {

    data = [
            {
                id: 1,
                title: '"Bonne Maison Chaussette" ',
                author: ' BONNE MAISON',
                price: '$19',
                coverImage: 'https://www.frenchtrotters.fr/23962/bonne-maison-chaussette.jpg' },
            {
                id: 2,
                title: '"Wr Cable Crewneck" ',
                author: ' WOOLRICH ',
                price: '$250',
                coverImage: 'https://www.frenchtrotters.fr/24112/wr-cable-crewneck.jpg'}
        ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (Math.random() > 0.75) {     
                    reject(new Error('Something goes wrong...'));
                } else {
                    resolve(this.data);                
                }
            }, 700);
        });
    }
}    

