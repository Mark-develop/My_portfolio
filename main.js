import './style.css'

let C = document.querySelector("canvas"),
  $ = C.getContext("2d");


let  W = C.width = innerWidth,
     H = C.height = window.innerHeight

let handleResize = () => {

  W = C.width = innerWidth;
  H = C.height = innerHeight;
  
  col = W / font;

  for(let i = 0; i < col; i++) {
    arr[i] = 1
}
}


const str = "a1 bc d $3ef $  qdqd   c zx cz x c q gh4ij k5l $m n6 +o$p qrst $uv wxyz",
  matrix = str.split('')

let font = 15,
  // количество колонок = ширина холста / размер шрифта
  col = W / font,
  arr = []

for(let i = 0; i < col; i++) {
    arr[i] = 1
}

// C.style.webkitFilter = 'blur(4px)'

function draw() {
    // определяем цвет фона
    // такой цвет позволяет добиться эффекта постепенного затухания символов
    $.fillStyle = "rgba(0, 24, 58, .2)"
  
    // заливаем холст выбранный цветом
    $.fillRect( 0, 0,  W, H)
  
    // меняем цвет для шрифта
    $.fillStyle = "#54d2d4"
  
    // устанавливаем параметры шрифта
    $.font = font + "px system-ui"
  
    // рисуем символы
    for (let i = 0; i < arr.length; i++) {
      // выбираем случайный набор символов
      let txt = matrix[Math.floor(Math.random() * matrix.length)]
  
      // рисуем символы
      // двигаемся вправо и вниз
      // fillText(набор символов, координата x = значение i, умноженное на размер шрифта, координата y = значение arr, умноженное на размер шрифта)
      $.fillText(txt, i * font, arr[i] * font)
      
      // если "y" больше высоты холста или Math.random() выдает больше 0.975 (чем это значение меньше, тем больше будет пустот на экране), то поднимаемся наверх (обнуляем "y")
      // это позволяет обеспечить разницу отрисовки отдельных колонок
      if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
      
      // увеличиваем значение y
      arr[i]++
      }
  }

setInterval(draw, 120)


window.addEventListener('resize', () => handleResize())