console.log(tempData);

document.getElementById("sobre-nosotros").onclick = () => {
    window.open("https://www.soyhenry.com/", "_blank");
}

document.getElementById("contacto").onclick = () => {
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRttNkDxkmnwcBjhsHdqtZsbdlWpwrSbbPFDnbcKVkbFLTdHwvqwHmHFWZDBCswgtsDjTbB", "_blank");
};



function createCard(){
    const container = document.getElementById("container-movies");

    tempData.forEach(pelicula => {
        const divPelicula = document.createElement("div");
        divPelicula.classList.add("card");
    
        const titulo = document.createElement("p");
        titulo.textContent = `Title: ${pelicula.title}`;
        titulo.classList.add("title");
    
        const year = document.createElement("p");
        year.textContent = `Year: ${pelicula.year}`;
        year.classList.add("info");
    
        const director = document.createElement("p");
        director.textContent = `Director: ${pelicula.director}`;
        director.classList.add("info");

        const genero = document.createElement("p");
        genero.textContent = `Genre: ${pelicula.genre.join(", ")}`;
        genero.classList.add("info");

        const rate = document.createElement("p");
        rate.textContent = `Rate: ${pelicula.rate}`;
        rate.classList.add("info");

        divPelicula.style.backgroundImage = `url(${pelicula.poster})`;
    
        divPelicula.appendChild(titulo);
        divPelicula.appendChild(year);
        divPelicula.appendChild(director);
        divPelicula.appendChild(genero);
        divPelicula.appendChild(rate);
    
        container.appendChild(divPelicula);
      });
    }
    
    createCard();

