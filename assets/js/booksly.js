a = document.getElementById("addSave");
b = document.getElementById("addBook");
c = document.getElementById("overlay");
d = document.getElementById("cancel");

a.addEventListener("click", function () {
    b.style.display = "block";
    c.style.backgroundColor = " rgba(0, 0, 0, 0.5)";
    c.style.opacity = 0.65;
});
d.addEventListener("click", function () {
    b.style.display = "none";
    c.style.backgroundColor = "transparent";
    c.style.opacity = 1;
});

k = document.getElementById("in1");
l = document.getElementById("in2");
m = document.getElementsByTagName("textarea");
n = document.getElementById("add");

n.addEventListener("click", function () {
    f = document.createElement("div");
    f.setAttribute("id", "books");
    g = document.createElement("h2");
    g.setAttribute("id", "title");
    h = document.createElement("h4");
    h.setAttribute("id", "author");
    i = document.createElement("p");
    i.setAttribute("id", "descp");
    p = document.createElement("p");
    p.setAttribute("id", "date")
    o = new Date();
    p.textContent = o.toLocaleString();
    j = document.createElement("button");
    j.setAttribute("id", "del");
    j.textContent = "delete";
    j.setAttribute("onclick", "dlt(event)");
    g.textContent = k.value;
    h.textContent = l.value;
    i.textContent = m[0].value;
    f.append(g);
    f.append(h);
    f.append(i);
    f.append(p);
    f.append(j);
    c.append(f);
    k.value = "";
    l.value = "";
    m[0].value = "";
});
function dlt(event) {
    event.target.parentElement.remove();
}