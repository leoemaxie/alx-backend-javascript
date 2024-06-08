export default function cleanSet(set, startString) {
  let array = [];

  if (!startString) return "";

  set.forEach((element) => {
    let index = element.indexOf(startString);

    if (index != -1) {
      array.push(element.slice(index + startString.length));
    }
  });

  return array.join("-");
}
