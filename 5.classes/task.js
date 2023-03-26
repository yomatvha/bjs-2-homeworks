class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
	}

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100; 
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
        this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
        this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
        this.type = "detective";
	}
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findBook = this.books.find(item => item[type] === value);
        if (findBook === undefined) {
            return null;
        } else {
            return findBook;
        }

        // const findResult = this.books.find((item) => item[type] === value);
        // return findResult || null;
        
    }

    giveBookByName(bookName) {
        const findBookIndex = this.books.findIndex(item => item.name === bookName);
        if (findBookIndex === -1) {
            return null;
        } else {
            const findBook = this.books[findBookIndex];
            this.books.splice(findBookIndex, 1);
            return findBook;
        }

        // const book = this.findBookBy("name", bookName);
        // if (!book) return null;
        // this.books = this.books.filter((item) => item.name !== bookName);
        // return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark >= 2 && mark <= 5) {
            if (!(subjectName in this.marks)) {
                this.marks[subjectName] = [];
            }
            this.marks[subjectName].push(mark);
        }
    }

    getAverageBySubject(subjectName) {
        if (!(subjectName in this.marks)) {
            return 0;
        }
        return Number((this.marks[subjectName].reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0
        ) / this.marks[subjectName].length).toFixed(2));
    }

    getAverage() {
        const allMarks = Object.keys(this.marks);
        if (allMarks.length === 0) {
            return 0;
        }
        let summ = 0;
        for (let i = 0; i < allMarks.length; i++) {
            summ += this.marks[allMarks[i]].reduce(
                (accumulator, currentValue) => accumulator + currentValue, 0
            ) / this.marks[allMarks[i]].length;
        }
        return Number((summ / allMarks.length).toFixed(2));
    }
}
