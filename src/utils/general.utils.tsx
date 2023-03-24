
export const capitalizeName = (string: string) => {
 
  let words = string.split('-');
  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(' ');

}