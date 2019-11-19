$(document).ready(() => {
  $.post('/api/getUsers', (response) => {
    if (response.ok == 'true'){
      var users = response.res;
      for (let i = 0; i < users.length; i++){
        let user = users[i];
        let element = `
        <div class="about-user">
            <img src="../lib/assets/${user.photo}" class="img-responsive" alt="" />
            <div class="profile-info col-md-6">
               <h3>${user.name}</h3>
               <h5>${user.role}</h5>
               <a class="user-profile" href="/Fa/user?username=${user.username}"><i class="fas fa-search"></i> مشاهده‌ی پروفایل</a>
               <div class="h-30"></div>
                <div class="h-10"></div>
            </div>
        </div>`;
        $("#artists-container").append(element);
      }
    } else {
      alert('لطفا بعدا تلاش کنید');
    }
  });
});
