const BinarySearchTree = require('./BinarySearchTree');
/*
  1).
    How many searches
    a). 12 -> 6 -> 8

    b). 12 -> 17 -> 14 -> 15 -> -1
*/
let tries = 0;
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  tries++;
  //console.log(start, end, item);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

/*
  2).
    Adding React UI
    In ReactSearch.js file
*/

let searchArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,];

function linearReactSearch(arr, value) {
  //this.state.data.find
  const find = arr.find((num, index) => {
    if (num === value) {
      return true;
    }
  })
  if (!find) {
    console.log('Not Found');
  }
}
function binaryReactSearch(arr, value) {
  tries = 0;
  arr.sort();
  binarySearch(arr, value)
  console.log(tries);
}
function handleInput(e) {
  
}

// linearReactSearch(searchArr, 17);
// binaryReactSearch(searchArr, 17);

/*
  3).
    Library Search
*/

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function findDewey(dewey, title) {
  let deweyList = library.filter(book => {
    if (book.dewey === dewey) {
      return true;
    }
  });
  return deweyList.find(book => book.title === title);
}
//console.log(findDewey('005.133', 'The C++ Programming Language'));
//console.log(findDewey('adawdwa', 'asdasdasd'))

/*
  4).
                              35
                        25          89
                    15      27    79   91
                  14  19              90
      a). Postorder should display: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35
      
                            8              
                      6          10
                    5   7      9   11
      b). Preorder should display: 8, 6, 5, 7, 10, 9, 11
*/

/*
  5).
    Preorder, InOrder and PostOrder
*/

function orderTest() {
  const BST = new BinarySearchTree();
  [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22].forEach(num => {
    BST.insert(num, num);
  });
  //console.log(inOrder(BST));
  //console.log(preOrder(BST));
  //console.log(postOrder(BST));
}

//Run self, then children
function preOrder(t) {
  if (!t) {
    return [];
  }
  else {
    const left = preOrder(t.left);
    const right = preOrder(t.right);
    return [t.value, ...left, ...right]
  }
}
//Run children, then self
function postOrder(t) {
  if (!t) {
    return [];
  }
  else {
    const left = postOrder(t.left);
    const right = postOrder(t.right);
    return [...left, ...right, t.value];
  }
}
//Run left child, then self, then right child
function inOrder(t) {
  if (!t) {
    return [];
  }
  else {
    const left = inOrder(t.left);
    const right = inOrder(t.right);
    return [...left, t.value, ...right]
  }
}
//orderTest();

/*
  6).
    Next Officer
*/

class TreeNode {
  constructor(key, value, parent = null) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  setLeft(node) {
    this.left = node;
  }
  setRight(node) {
    this.right = node;
  }
  setParent(node) {
    this.parent = node;
  }
  setValue(value) {
    this.value = value;
  }
  setKey(key) {
    this.key = key;
  }
}

function nextCommandingTest() {
  //['Captian Picard', 'Commander Riker', 'Commander Data', 'Lt. Cmdr Worf', 'Lieutenant security-officer', 'Lt. Cmdr. LaForge', 'Lt. Cmdr.', 'Lieutentant'];
  const captain = new TreeNode('Captain', 'Picard');
  const commander1 = new TreeNode('Commander', 'Riker', captain);
  const commander2 = new TreeNode('Commander', 'Data', captain);
  const lt1 = new TreeNode('Lt. Cmdr.', 'Worf', commander1);
  const lt2 = new TreeNode('Lt. Cmdr.', 'LaForge', commander1);
  const lt3 = new TreeNode('Lt. Cmdr', 'Crusher', commander2);
  const lieut = new TreeNode('Lieutentant', 'security-officer', lt1);
  const lieut2 = new TreeNode('Lieutentant', 'Selar', lt3);
  //lt1.setLeft(new TreeNode('Lieutentant', 'security-officer', lt1))
  //lt3.setLeft(new TreeNode('Lieutentant', 'Selar', lt3))
  captain.setLeft(commander1);
  captain.setRight(commander2);
  commander1.setLeft(lt1);
  commander1.setRight(lt2);
  lt1.setLeft(lieut);
  commander2.setRight(lt3);
  lt3.setLeft(lieut2);
  nextCommanding(captain);
}
function remove(t, value) {
  if (t.value === value) {
    if (t.left) {
      t.value = t.left.value;
    }
  }
  else {
    remove(t.left, value);
    remove(t.right.value);
  }
}
function nextCommanding(t) {
  console.log();
}
nextCommandingTest();

/*
  7).
    Max Profit
*/
const stocks = [128, 97, 121, 123, 98, 97, 105]

function maxProfit(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = i;
    let max = arr[i];
    // get max value and index here
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }
    if (max <= arr[i]) {
      // console.log(`No profit can be made buying on day ${i}`)
    }
    else {
      console.log(`Max profit possible buying on |Day: ${i+1}| and selling on |Day: ${maxIndex + 1}|`);
      console.log(`${max-arr[i]}`)
    }
  }
}

/*
  8).
    EggDrop
*/

function eggDrop() {
  let floorBreak = Math.floor(Math.random()*100)+1;
  let eggs = 2;
  console.log(eggDropUtil(0, 0, eggs, floorBreak));
}
function eggDropUtil(currentFloor, steps, eggs, floorBreak) {
  const floorBase = (14 - steps)
  if (currentFloor >= 100) {
    return steps;
  }
  else {
    if (eggs === 1) {
      console.log(`Dropping at ${currentFloor}`)
      if (currentFloor >= floorBreak) {
        console.log(`Second egg broke at floor ${currentFloor}`)
        console.log(`The breaking point was ${floorBreak}`);
        return steps;
      }
      return eggDropUtil(currentFloor+1, steps+1, eggs, floorBreak);
    }
    else {
      console.log(`Dropping at ${currentFloor}`)
      if (currentFloor >= floorBreak) {
        console.log(`First egg broke at floor ${currentFloor}`);
        return eggDropUtil(currentFloor-floorBase, steps, eggs-1, floorBreak);
      }
      else {
        return eggDropUtil(currentFloor+floorBase, steps+1, eggs, floorBreak);
      }
    }
  }
}
eggDrop();