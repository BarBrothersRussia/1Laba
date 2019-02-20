function BinarySearchTree (val) {
        this.value = val;
        this.left = null;
        this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
        let subtree = value < this.value ? 'left' : 'right';
        if (this[subtree]) {
                this[subtree].insert(value);
        } else {
                this[subtree] = new BinarySearchTree(value);
        }
}

BinarySearchTree.prototype.contains = function (value) {
        if (value === this.value) {
                return true;
        }
        let subtree = value < this.value ? 'left' : 'right';
        if (this[subtree]) {
                return this[subtree].contains(value);
        } else {
                return false;
        }
}

const binarySearchTree = new BinarySearchTree(20);
binarySearchTree.insert(25);
binarySearchTree.insert(21);
console.log(binarySearchTree);

console.log(binarySearchTree.contains(21));
console.log(binarySearchTree.contains(20));
console.log(binarySearchTree.contains(33));
