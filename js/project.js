// tabs questions-presents 
const presentItemRightBody = document.querySelectorAll('.present-item-right__body');
const presentItemLeftContent = document.querySelectorAll('.present-item-left__content');
const presentItemLefTLi = document.querySelectorAll('.present-item-left__li');
const presentItemLeftNumber = document.querySelector('.present-item-left__number-question');
const PresentButtonPrev = document.querySelector('.present-item-left_button_prev');
const PresentButtonNext = document.querySelector('.present-item-left_button_next');

let number = 0;
let lock = true;
const MaxNumber = presentItemLeftContent.length
const PresentSliderPrev = (number) => {
    if(number <= 1){
        PresentButtonPrev.classList.remove('show')
    };
    presentItemLefTLi.forEach((item,index)=>{
        if(index == number){
            item.classList.remove('present-item-left__li_active');
        }
    });
};

const PresentSliderNext = (number) => {
    if(number >= 1){
        PresentButtonPrev.classList.add('show')
    };
    presentItemLefTLi.forEach((item,index)=>{
        if(index == number){
            item.classList.add('present-item-left__li_active')
        }
    })
};

const PresentSliderActive = (number) => {

    $(".present-item-left__content").hide();
    $(".present-item-left__content").eq(number).fadeIn(1000);
    $(".present-item-right__body").hide();
    $(".present-item-right__body").eq(number).fadeIn({
        complete: function(){
          $(this).css("display", "flex");
        },
        duration: 1000
      });
    presentItemLeftNumber.textContent = `вопрос ${++number} из 6`
    number--
}

const SlideEnd = () => {
    $(".present-start").hide();
    $(".present-end").fadeIn(1000);
}

PresentButtonPrev.addEventListener('click', ()=>{
    if(lock == true){
    if(MaxNumber == number){
            number--;
        };
        lock = false
        PresentSliderPrev(number);
        number--;
        PresentSliderActive(number);
        setTimeout(()=>{
            lock = true
        }, 1000)
        
    };
});


PresentButtonNext.addEventListener('click', ()=>{
    if(lock == true){
        console.log('lock: ', lock);
    if(MaxNumber > number){
            number++;
            lock = false
            PresentSliderNext(number);
            PresentSliderActive(number);
            setTimeout(()=>{
                lock = true
            }, 1000)
        };
        if(MaxNumber == number){
            SlideEnd();
            return
        }
    };
    });


// selects 

$(document).ready(function() {
// spoiler 
    $('.spoiler').click(function(event){
        $(this).toggleClass('spoiler_active').next().slideToggle(300);
    });
        $('.spoiler_small').click(function(event){
            if(window.matchMedia('(max-width: 576px)').matches){
            $(this).toggleClass('spoiler_active').next().slideToggle(300);
        }
        });
    });
// selects 

const ItemSelect = document.querySelectorAll('.content-present-item-4__select');

ItemSelect.forEach(item=>{
    const ItemSelectTitle = item.querySelector('.content-present-item-4__select-title');
    const selectItem = item.querySelectorAll('.select-item');
    selectItem.forEach(itemSelect=>{
        itemSelect.addEventListener('click',()=>{
            ItemSelectTitle.textContent = itemSelect.textContent
            $(ItemSelectTitle).toggleClass('spoiler_active').next().slideToggle(300);
        })
    })
});