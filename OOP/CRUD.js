class CRUD {
    constructor() {
        this.items = [];
        this.id = 0;

        this.create = function (newItem) {
            this.id++;
            this.items.push({ ...newItem, id: this.id });
        }

        this.read = function () {
            console.log(this.items);
            return this.items;
        }

        this.readById = function (id) {
            console.log(this.items.find(item => item.id === id));
            return this.items.find(item => item.id === id);
        }

        this.update = function (id, newValues) {
            const oldItems = structuredClone(this.items);
            const newItems = oldItems.map(item => {
                if (item.id  === id) return newValues;
                return item;
            });
            this.items = newItems;
        }

        this.delete = function (id) {
            const oldItems = structuredClone(this.items);
            const newItems = oldItems.filter(item => item.id !== id);
            this.items = newItems;
        }
    }
}

class usersCRUD extends CRUD {
    constructor() {
        super();

        this.create = function (newItem) {
            const { password } = newItem;
        }
    }
}

const usersAPI = new usersCRUD();