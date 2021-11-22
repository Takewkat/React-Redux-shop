
export default class BookstoreService {

    data = [
            {
                id: 1,
                title: '"Production ready Microservices" ',
                author: ' Susan J. Fowler',
                price: '$27',
                coverImage: 'https://images-eu.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX342_SY445_QL70_ML2_.jpg' },
            {
                id: 2,
                title: '"Release It!" ',
                author: ' Michael T. Nygard',
                price: '$19',
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL.jpg'}
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

