import moment from 'moment';

export const formatDate = (date) =>
  moment.unix(date / 1000).format('DD/MM/YYYY');

export const fromNow = (date) => moment.unix(date / 1000).fromNow();

export const removeFooter = (btn_class = '', i_Text = '') => {
  const footer = document.querySelector('.slide-footer');
  if (footer) footer.classList.remove('active');
  if (btn_class === '.nlead--btn') {
    const nl_list = document.querySelectorAll(btn_class);
    if (nl_list)
      for (let i = 0; i < nl_list.length; i++) nl_list[i].innerText = i_Text;
  } else if (btn_class !== '') {
    const mutation_btn = document.querySelector(btn_class);
    if (mutation_btn) mutation_btn.innerText = i_Text;
  }
};
