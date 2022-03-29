let ratings = document.querySelectorAll('.circle');
let btn = document.getElementById('btn');
let evaluation = document.querySelector('.evaluation');
let thankyou = document.querySelector('.thankyou');
let span = document.getElementById('rating');

for (let i = 0; i < ratings.length; i++) {
          ratings[i].addEventListener('click', () => {
                    let rating = ratings[i].innerHTML;

                    for (let i = 0; i < ratings.length; i++) {
                              ratings[i].classList.contains('selected')
                              ratings[i].classList.remove('selected');
                    }

                    ratings[i].classList.toggle('selected');

                    btn.addEventListener('click', () => {
                              evaluation.style.display = 'none';
                              thankyou.style.display = 'block';
                              span.innerHTML = rating;
                    })
          })
}
