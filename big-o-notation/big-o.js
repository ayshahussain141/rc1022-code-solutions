/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1_ * 1_ = O(1)
  const unique = [];                // _1 * _1 = O(1)
  for (
    let i = 0;                      // _1 * 1_ = O(1)
    i < words.length;               // 2_ * n_ = O(n)
    i++                             // 2_ * _n = O(n)
  ) {
    const word = words[i];          // 2_ * n_ = O(1)
    if (!seen[word]) {              // 2_ * n_ = O(n)
      seen[word] = true;            // _1 * _n = O(n)
      unique[unique.length] = word; //2 _ * _n = O(n)
    }
  }
  return unique;                    // 1_ * _1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // _1 * 1_ = O(1)
  for (
    let i = 0;                      // _1 * _1 = O(1)
    i < words.length;               // _2 * n_ = O(n)
    i++                             // _2 * _n = O(n)
  ) {
    const word = words[i];          // 2_ * n_ = O(n)
    let isUnique = true;            // 1_* n = O(?)
    for (
      let c = 0;                    // _1 * _n = O(?)
      c < i;                        // 2 * n * n = O(n^2)
      c++                          //2 * n * n= O(n^2)
    ) {
      const comparing = words[c];   // _2 * n_* n = O(n^2)
      if (comparing === word) {     // _1 * n_* n = O(n^2)
        isUnique = false;           // 1_ * n * n = O(n^2)
      }
    }
    if (isUnique) {                 // 1_ * _n = O(n)
      unique[unique.length] = word; // _2 * n_ = O(n)
    }
  }
  return unique;                    // _1* _1 = O(n)
} // Big O Notation for uniqueQuadratic: O(n^2)
