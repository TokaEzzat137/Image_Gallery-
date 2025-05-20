document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const images = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg"
    ];

    images.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        img.alt =image/image1.jpg ";
        img.loading = "lazy";
        gallery.appendChild(img);
    });
});
