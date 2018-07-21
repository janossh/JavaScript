function init() {
  const adminLogin = 'admin';
  const adminPassword = 'm4ngo1zh4ackz0r';
  const wellcomeMessage = 'Добро пожаловать';

  let login = prompt('Enter login:');

  if (login) {
    if (login == adminLogin) {
      let password = prompt('Enter password:');
      if (password) {
        if (password == adminPassword) {
          alert(wellcomeMessage);
        } else {
          showAlertForbiden();
        }
      } else {
        showAlertCanceled();
      }
    } else {
      showAlertForbiden();
    }
  } else {
    showAlertCanceled();
  }

  function showAlertCanceled() {
    alert('Отменено пользователем!');
  }

  function showAlertForbiden() {
    alert('Доступ запрещен!');
  }
}
