const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElementsleft = document.querySelectorAll('.hidden-left');
hiddenElementsleft.forEach((el) => observer.observe(el));

const hiddenElementsright = document.querySelectorAll('.hidden-right');
hiddenElementsright.forEach((el) => observer.observe(el));