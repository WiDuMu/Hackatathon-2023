<template>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
  
  <!--adding this nav bar to app.vue, because app.vue renders on ALL pages-->
  <a href="http://www.themostamazingwebsiteontheinternet.com/" > <!--test for a url DO NOT LET THE USER GO HERE-->
    <nav class="navbar">

      <img height="100" width="100" src="/up_arrows_booled_and_not_booled.svg">
      <!--these won't link to anythign just to look pretty-->
      <ul>
        <li>
          <a>My Account</a>
        </li>

        <li>
          <a>Settings</a>
        </li>
        

      </ul>

    </nav>
    
  </a> 



  <NuxtPage />

  

</template>
