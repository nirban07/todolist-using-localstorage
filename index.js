let ptag = document.getElementById("para");
let submitButton = document.getElementById("submit");

if (localStorage.getItem("randomno") > 0) {
  for (let x in localStorage) {
    // to avoid null values
    if (localStorage.getItem(x) == null) {
      continue;
    }
    // to avoid printing randomno
    if (x === "randomno") {
      continue;
    }
    // loop through the todos stored
    let para = document.createElement("p");
    let txtnode = document.createTextNode(localStorage.getItem(x));
    para.appendChild(txtnode);
    ptag.insertBefore(para, ptag.firstChild);
  }
}
// if local storage has some random no set greater than zero then use it
// other wise start with zero

if (localStorage.getItem("randomno") == null) {
  localStorage.setItem("randomno", 0);
}
let randomno = Number(localStorage.getItem("randomno"));

submitButton.onclick = () => {
  // getting the value
  let txt = document.getElementById("insert").value;

  // creating the node and text node and adding the them togethere
  let para = document.createElement("p");
  let txtnode = document.createTextNode(txt);
  para.appendChild(txtnode);

  // adding the value to the local storage
  localStorage.setItem(randomno, txt);
  localStorage.setItem("randomno", (randomno += 1));

  // adding the tag to the existing tag
  ptag.insertBefore(para, ptag.firstChild);

  // setting the value to zero
  document.getElementById("insert").value = "";
};
