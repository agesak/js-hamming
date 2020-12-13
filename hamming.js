//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (string1, string2) => {
  if (string1.length === 0 && string2.length !== 0){
    throw new Error('left strand must not be empty');
  }
  if (string1.length !== 0 && string2.length === 0){
    throw new Error('right strand must not be empty');
  }
  if (string1.length !== string2.length){
  throw new Error('left and right strands must be of equal length');
  }
  
  let differences = 0;
  // randomly picked length of 1st string
  for (let i = 0; i <= string1.length; i += 1){
    if (string1[i] !== string2[i]) {
      differences += 1;
    }
  }
  return differences;
};
