import {OPEN, ACTIVE, BODY} from './../constants';

;(() => {

  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(`[data-modal="${control.data('modal-control')}"]`);

    control.on('click', e => {
      e.preventDefault();
      modals.removeClass(OPEN);
      modal.addClass(OPEN);
      controls.removeClass(ACTIVE);
      control.addClass(ACTIVE);
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const inner = modal.find('[data-modal-container]');
    const close = modal.find('[data-modal-close]');

    const hide = () => modal.removeClass(OPEN);

    BODY.on('click', e => {
      if ($(e.target).closest(inner).length || $(e.target).closest(close).length || $(e.target).closest(controls).length ) return;
      hide();
      controls.removeClass(ACTIVE);
    });

    close.on('click', e => {
      e.preventDefault();
      hide();
    });
  });

})();
// ----------------------  HTML EXEMPLE ---------------------
// <a href="#" data-modal-control="modalname"></a> ---- trigger
// <div class="modal" data-modal="modalname"> ------ modal window
//     <div class="modal__container" data-modal-container>
//       <div class="modal__inner">
//         <button class="modal__close" data-modal-close>
//           {{mixins.icon('close')}}
//         </button>
        
//       </div>
//     </div>
//   </div>
