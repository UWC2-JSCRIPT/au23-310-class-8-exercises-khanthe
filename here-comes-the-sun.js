let rgb = 0;

const animateSunrise = () => {
    rgb++;
    if (rgb <= 255) {
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        requestAnimationFrame(animateSunrise);
    }
}

requestAnimationFrame(animateSunrise);
