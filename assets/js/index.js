const checkbox = document.querySelector('[data-checkbox]')
const range = document.querySelector('[data-range]');
const plan = document.querySelector('[data-plan]');
const pageview = document.querySelector('[data-pageviews]');
const priceCard = document.querySelector('[data-price]');
const preco = {
    num1(range) {
        if(range.value == 1  && !checkbox.checked) {
            pageview.textContent = '10k'
            priceCard.textContent = '$08.00'
        } if(range.value == 1 && checkbox.checked) {
            pageview.textContent = '10k'
            priceCard.textContent = `$${(8*12)-((8*12)*(25/100))}.00`
        }
    },
    num2(range) {
        if(range.value == 2  && !checkbox.checked) {
            pageview.textContent = '50k'
            priceCard.textContent = '$12.00'
        } if(range.value == 2  && checkbox.checked) {
            pageview.textContent = '50k'
            priceCard.textContent = `$${(12*12)-((12*12)*(25/100))}.00`
        }
    },
    num3(range) {
        if(range.value == 3 && !checkbox.checked) {
            pageview.textContent = '100k'
            priceCard.textContent = '$16.00'
        } if(range.value == 3  && checkbox.checked) {
            pageview.textContent = '100k'
            priceCard.textContent = `$${(16*12)-((16*12)*(25/100))}.00`
        }
    },
    num4(range) {
        if(range.value == 4 && !checkbox.checked) {
            pageview.textContent = '500k'
            priceCard.textContent = '$24.00'
        } if(range.value == 4  && checkbox.checked) {
            pageview.textContent = '500k'
            priceCard.textContent = `$${(24*12)-((24*12)*(25/100))}.00`
        }
    },num5(range) {
        if(range.value == 5 && !checkbox.checked) {
            pageview.textContent = '1m'
            priceCard.textContent = '$36.00'
        } if(range.value == 5  && checkbox.checked) {
            pageview.textContent = '1m'
            priceCard.textContent = `$${(36*12)-((36*12)*(25/100))}.00`
        }
    }
}

    checkbox.addEventListener('click', function() {
        const label = document.querySelector('[data-label]');
        const yearly = document.querySelector('[data-yearly]');
        const monthly = document.querySelector('[data-monthly]');

            preco.num1(range);
            preco.num2(range);
            preco.num3(range);
            preco.num4(range);
            preco.num5(range);

            if(checkbox.checked) {
                label.classList.remove('no-active');
                label.classList.add('active');

                yearly.style.color = 'hsl(174, 86%, 45%)';
                monthly.style.color = '';

                plan.textContent = 'year';
            } else {
                label.classList.remove('active');
                label.classList.add('no-active');

                yearly.style.color = '';
                monthly.style.color = 'hsl(174, 86%, 45%)';
                
                plan.textContent = 'month';
            }
    })

    
    range.addEventListener('input', function() {
        const porc = (((range.value - range.min) * 100)/(range.max - range.min));
            
            range.style.backgroundImage = `linear-gradient(to right, hsl(174, 77%, 80%) ${porc}%, hsl(224, 65%, 95%) ${porc}%, hsl(224, 65%, 95%) 100%)`;
            
            preco.num1(range);
            preco.num2(range);
            preco.num3(range);
            preco.num4(range);
            preco.num5(range);

    })

