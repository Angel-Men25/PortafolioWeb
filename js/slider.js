window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__list-1'), {
    slidesToShow: 1,
    dots: '.carousel__indicadores-1',
    draggable: false,
    arrows: {
      prev: '.carousel__previous-1',
      next: '.carousel__next-1'
    }
  });
  new Glider(document.querySelector('.carousel__list-2'), {
    slidesToShow: 1,
    dots: '.carousel__indicadores-2',
    draggable: false,
    arrows: {
      prev: '.carousel__previous-2',
      next: '.carousel__next-2'
    }
  });
  new Glider(document.querySelector('.carousel__list-3'), {
    slidesToShow: 1,
    dots: '.carousel__indicadores-3',
    draggable: false,
    arrows: {
      prev: '.carousel__previous-3',
      next: '.carousel__next-3'
    }
  });
  new Glider(document.querySelector('.carousel__list-4'), {
    slidesToShow: 1,
    dots: '.carousel__indicadores-4',
    draggable: false,
    arrows: {
      prev: '.carousel__previous-4',
      next: '.carousel__next-4'
    }
  });
})