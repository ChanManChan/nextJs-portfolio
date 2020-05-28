import moment from 'moment';

export const formatDate = (date) =>
  moment.unix(date / 1000).format('DD/MM/YYYY');

export const fromNow = (date) => moment.unix(date / 1000).fromNow();

export const removeFooter = (btn_class, i_Text) => {
  document.querySelector('.slide-footer').classList.remove('active');
  if (btn_class === '.nlead--btn') {
    const nl_list = document.querySelectorAll(btn_class);
    for (let i = 0; i < nl_list.length; i++) nl_list[i].innerText = i_Text;
  } else document.querySelector(btn_class).innerText = i_Text;
};
