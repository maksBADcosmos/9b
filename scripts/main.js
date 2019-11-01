function comingsoon() {
    Swal.fire({
        title: '<strong>Здесь ничего нет</strong>',
        type: 'info',
        html:
          'Легенды гласят, что <b>однажды</b>, ' +
          'при нажатии на кнопку откроется страница...',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,

        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Ясно!',
        confirmButtonAriaLabel: 'Ясно, понятно',
      });
}